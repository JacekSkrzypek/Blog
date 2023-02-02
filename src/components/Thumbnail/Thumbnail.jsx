import React from "react";
import { NUMBERS, IMAGES } from "../../constans";
import { useGlobalContext } from "../../context";

function Thumbnail() {
  const { data, functions } = useGlobalContext();

  return (
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
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = IMAGES.defaultImage;
                  }}
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
  );
}

export default Thumbnail;
