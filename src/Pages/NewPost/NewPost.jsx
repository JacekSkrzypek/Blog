import React, { useState } from "react";
import "./style.css";
import { useGlobalContext } from "../../context";
import SinglePost from "../../components/SinglePost";
import { useNavigate } from "react-router-dom";
import { TEXTS } from "../../constans";

const NewPost = () => {
  const { data, functions } = useGlobalContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photoPath, setPhotoPath] = useState("");

  const navigate = useNavigate();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDecription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangePhotoPath = (event) => {
    setPhotoPath(event.target.value);
  };

  const getDescription = () => {
    let text = description;
    let lines = text.split("\n");
    text = lines.join(TEXTS.newLineSymbol);
    return text;
  };

  const getPost = () => {
    let id;

    if(!data.posts[0]) {
      id = 0;
    } else {
    id = data.posts[0].id + 1;}
    
    const post = {
      id,
      title,
      description: getDescription(),
      image: photoPath,
    };
    return post;
  };

  const handleShowPost = () => {
    functions.setSelectedPost(getPost());
  };

  const handleAddPost = () => {
    functions.addPost(getPost());
    navigate("/");
  };

  return (
    <aside className="new-post">
      <section className="new-post-form">
        <h1>Add your new post</h1>
        <form>
          <label>Title:</label>
          <input type={"text"} onChange={handleChangeTitle} />
          <label>Description:</label>
          <textarea onChange={handleChangeDecription} />
          <label>Path to photo:</label>
          <input type={"text"} onChange={handleChangePhotoPath} />

          <div className="buttons">
            <button type="button" onClick={handleAddPost}>
              Add
            </button>
            <button type="button" onClick={handleShowPost}>
              Show post
            </button>
          </div>
        </form>
      </section>
      {data.selectedPost && <SinglePost isCreateNewPost={true} />}
    </aside>
  );
};

export default NewPost;
