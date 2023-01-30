import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import { NUMBERS } from "../../constans";
import "./style.css";
import "boxicons";
import { IoIosArrowDown } from "react-icons/io";

const Posts = () => {
  const { data, functions } = useGlobalContext();

  const handleShowMore = () => {
    functions.setPostCount(1 + data.postCount);
  };

  return (
    <section className="posts-section">
      <h1>My posts</h1>
      <div className="posts">
        {data.posts.map((post) => {
          const { id, title, image } = post;
          if (data.posts.length - id <= NUMBERS.postsLimit * data.postCount) {
            return (
              <article key={id} className="post">
                <div className="post-image">
                  <img
                    src={image}
                    alt={title}
                    onClick={() => functions.selectPost(id)}
                  />
                </div>
                <div className="post-title">
                  <h2>{title}</h2>
                </div>
              </article>
            );
          }
        })}
      </div>

      {data.posts.length > NUMBERS.postsLimit * data.postCount && (
        <button className="show-more" onClick={handleShowMore}>
          <IoIosArrowDown className="react-icons"></IoIosArrowDown>
        </button>
      )}
    </section>
  );
};

export default Posts;
