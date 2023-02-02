import React, { useContext, useState } from "react";
import { POSTS, TEXTS } from "./constants";

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

  const addLineBreak = (text) => {
    const lines = text.split("\n");
    return lines.join(TEXTS.newLineSymbol);
  };

  const removeLineBreak = (text) => {
    const lines = text.split(TEXTS.newLineSymbol);
    return lines.join("\n");
  }

  const data = {
    posts,
    selectedPost,
    postCount,
  };

  const functions = {
    addLineBreak,
    addPost,
    editPost,
    deletePost,
    removeLineBreak,
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
  const context = useContext(AppContext);
  if(context === undefined) {
    throw new Error('useContext must be used within a appProvider')
  }
  return context
};

export default { AppContext, AppProvider };
