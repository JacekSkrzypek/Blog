import React from "react";
import "./style.css";
import { useGlobalContext } from "../../context";
import EditPost from "../EditPost";
import { useState } from "react";
import { TEXTS, IMAGES } from "../../constans";
import Confirmation from "../Confirmation";
import { FiEdit } from "react-icons/fi";
import { BiTrash } from 'react-icons/bi';

const SinglePost = ({ isCreateNewPost }) => {
  const { data, functions } = useGlobalContext();
  const { title, description, image } = data.selectedPost;
  const { setSelectedPost } = functions;

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleIsDelete = () => {
    setIsDelete(!isDelete);
  };

  const handleModalDisplay = (event) => {
    if (event.target.className === "modal-overlay") {
      setSelectedPost(null);
    }
  };

  const changeEditMode = () => {
    setIsEdit(!isEdit);
  };

  const descriptionLines = description.split(TEXTS.newLineSymbol);

  return (
    <aside className="modal-overlay" onClick={handleModalDisplay}>
      <div className="modal">
        <div className="top-buttons">
          {!isCreateNewPost && (
            <>
              <button onClick={handleIsDelete}> <BiTrash className='button-icon' /> </button>
              <button onClick={changeEditMode}> <FiEdit className='button-icon' /> </button>
            </>
          )}
        </div>

        {!isEdit ? (
          <>
            <div className="image">
              <img src={image} 
                alt={title} 
                onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src = IMAGES.defaultImage }}/>
            </div>
            <div className="information">
              <h1>{title}</h1>
              <div>
                {descriptionLines.map((line, key) => (
                  <p className="description-line" key={key}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </>
        ) : (
          <EditPost changeEditMode={changeEditMode} />
        )}
      </div>
      {isDelete && <Confirmation handleIsDelete={handleIsDelete} />}
    </aside>
  );
};

export default SinglePost;
