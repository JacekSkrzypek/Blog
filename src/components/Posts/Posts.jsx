import React from "react";
import { useGlobalContext } from "../../context";
import { NUMBERS, IMAGES } from "../../constans";
import "../modules.css";
import { IoIosArrowDown, IoMdHeartDislike } from "react-icons/io";

const Posts = () => {
  const { data, functions } = useGlobalContext();

  const handleShowMore = () => {
    functions.setPostCount(1 + data.postCount);
  };

  return (
    <section className="posts-section">
      <h1 className="section-title">My posts</h1>
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
                    onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src = IMAGES.defaultImage }}
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
