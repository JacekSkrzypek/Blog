import React from "react";
import { useGlobalContext } from "../../context";
import "../modules.css";
import { useForm } from "react-hook-form";

const EditPost = ({ changeEditMode }) => {
  const { data, functions } = useGlobalContext();
  const { register, watch, handleSubmit } = useForm({defaultValues: {
    title: data.selectedPost.title,
    description: functions.removeLineBreak(data.selectedPost.description),
    image: data.selectedPost.image
  }});

  const getPost = () => {
    const id = data.selectedPost.id;
    const post = {
      id,
      title: watch('title'),
      description: functions.addLineBreak(watch('description')),
      image: watch('image')
    };
    return post;
  };

  const handleEditPost = () => {
    const newPost = getPost();
    functions.editPost(newPost);
    functions.setSelectedPost(newPost);
    changeEditMode();
  };

  return (
    <form className="edit-post" onSubmit={handleSubmit(() => {
      handleEditPost();
    })}>
      <label>Title:</label>
      <input {...register('title')} type={"text"} />
      <label>Description:</label>
      <textarea {...register('description')} className='textarea' />
      <label>Path to photo:</label>
      <input {...register('image')} type={"text"}  />

      <div className="buttons">
        <button className="button" type="button" onClick={handleEditPost}> Edit </button>
        <button className="button" type="button" onClick={changeEditMode}> Cancel </button>
      </div>
    </form>
  );
};

export default EditPost;
