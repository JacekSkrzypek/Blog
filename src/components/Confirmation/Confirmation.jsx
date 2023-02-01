import React from "react";
import "./style.css";
import { useGlobalContext } from "../../context";

const Confirmation = ({ handleIsDelete }) => {
  const { functions } = useGlobalContext();

  const handleDeletePost = () => {
    functions.deletePost();
    handleIsDelete();
  };

  const handleHideModal = (event) => {
    const clickedClass = event.target.className;
    if (
      clickedClass === "confirmation-overlay" ||
      clickedClass === "cancel-button"
    ) {
      handleIsDelete();
    }
  };

  return (
    <aside className="confirmation-overlay" onClick={handleHideModal}>
      <div className="confirmation">
        <h1>Are you sure to delete this post?</h1>
        <div className="buttons">
          <button className="delete-button" onClick={handleDeletePost}>
            Delete
          </button>
          <button className="cancel-button" onClick={handleHideModal}>
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Confirmation;
