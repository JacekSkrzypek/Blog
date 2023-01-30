import React, { useContext, useState } from "react";
import { POSTS } from "./constans";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState(POSTS);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postCount, setPostCount] = useState(1);

  const selectPost = (id) => {
    const post = posts.find((item) => item.id === id);
    setSelectedPost(post);
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const editPost = (newPost) => {
    const newPosts = posts.map((post) =>
      post.id === newPost.id ? newPost : post
    );
    setPosts(newPosts);
  };

  const deletePost = () => {
    const id = selectedPost.id;
    const newPosts = posts.filter((post) => id !== post.id);
    setPosts(newPosts);
    setSelectedPost(null);
  };

  const data = {
    posts,
    selectedPost,
    postCount,
  };

  const functions = {
    addPost,
    editPost,
    deletePost,
    selectPost,
    setPosts,
    setPostCount,
    setSelectedPost,
  };

  return (
    <AppContext.Provider value={{ data, functions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default { AppContext, AppProvider };
