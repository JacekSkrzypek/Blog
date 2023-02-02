import React from "react";
import "./style.css";
import { useGlobalContext } from "../../context";
import SinglePost from "../../components/SinglePost";
import { useNavigate } from "react-router-dom";
import { TEXTS } from "../../constants";
import { useForm } from "react-hook-form";

const NewPost = () => {
  const { data, functions } = useGlobalContext();
  const {register, watch, handleSubmit} = useForm();

  const navigate = useNavigate();

  const getPostId = () => {
    if(!data.posts[0]) {
      return  0;} 

    return data.posts[0].id + 1;
  }

  const getPost = () => {
    const id =  getPostId();
    const post = {
      id,
      title: watch('title'),
      description: functions.addLineBreak(watch('description')),
      image: watch('image')
    }
    return post;
  }

  const handleShowPost = () => {
    functions.setSelectedPost(getPost());
  };

  const handleAddPost = () => {
    const post = getPost();
    functions.addPost(post);
    navigate("/");
  };

  return (
    <aside className="new-post-aside">
      <section className="new-post-form">
        <h1>Add your new post</h1>
        <form onSubmit={handleSubmit(() => {
          handleAddPost();
        })}>
          <label>Title:</label>
          <input {...register('title')} type={"text"}  />
          <label>Description:</label>
          <textarea {...register('description')} />
          <label>Path to photo:</label>
          <input {...register('image')} type={"text"}  />

          <div className="buttons">
            <button type="submit"> Add</button>
            <button type="button" onClick={handleShowPost}> Show post </button>
          </div>
        </form>
      </section>
      {data.selectedPost && <SinglePost isCreateNewPost={true} />}
    </aside>
  );
};

export default NewPost;
