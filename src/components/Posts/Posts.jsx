import React from "react";
import { useGlobalContext } from "../../context";
import { NUMBERS } from "../../constans";
import "../modules.css";
import { IoIosArrowDown, IoMdHeartDislike } from "react-icons/io";
import Thumbnail from '../Thumbnail';

const Posts = () => {
  const { data, functions } = useGlobalContext();

  const handleShowMore = () => {
    functions.setPostCount(1 + data.postCount);
  };

  return (
    <section className="posts-section">
      <h1 className="section-title">My posts</h1>
   <Thumbnail/>

      {data.posts.length > NUMBERS.postsLimit * data.postCount && (
        <button className="show-more" onClick={handleShowMore}>
          <IoIosArrowDown className="react-icons"></IoIosArrowDown>
        </button>
      )}
    </section>
  );
};

export default Posts;

 