import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { TEXTS } from "../../constans";
import "./style.css";

const EditPost = ({ changeEditMode }) => {
  const { data, functions } = useGlobalContext();

  const [title, setTitle] = useState(data.selectedPost.title);
  const [description, setDescription] = useState(data.selectedPost.description);
  const [photoPath, setPhotoPath] = useState(data.selectedPost.image);

  const getDescription = (odlDescription) => {
    let text = odlDescription.split(TEXTS.newLineSymbol);
    text = text.join("\n");
    return text;
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDecription = (event) => {
    let text = event.target.value;

    setDescription(text);
    let lines = text.split("\n");
    text = lines.join(TEXTS.newLineSymbol);
    setDescription(text);
  };

  const handleChangePhotoPath = (event) => {
    setPhotoPath(event.target.value);
  };

  const getPost = () => {
    const id = data.selectedPost.id;
    const post = {
      id,
      title,
      description,
      image: photoPath,
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
    <form className="edit-post">
      <label>Title:</label>
      <input type={"text"} value={title} onChange={handleChangeTitle} />
      <label>Description:</label>
      <textarea
        onChange={handleChangeDecription}
        value={getDescription(description)}
      />
      <label>Path to photo:</label>
      <input type={"text"} onChange={handleChangePhotoPath} value={photoPath} />

      <div className="buttons">
        <button type="button" onClick={handleEditPost}>
          Edit
        </button>
        <button type="button" onClick={changeEditMode}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditPost;
