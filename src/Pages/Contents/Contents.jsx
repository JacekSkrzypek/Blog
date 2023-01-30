import React, { Suspense, useState } from "react";
import { IMAGES, NUMBERS } from "../../constans";
import AboutMe from "../../components/AboutMe";
import SinglePost from "../../components/SinglePost";
import "./style.css";
import { useGlobalContext } from "../../context";
import Posts from "../../components/Posts/Posts";

const Contents = () => {
  const { data } = useGlobalContext();
  const { selectedPost } = data;

  return (
    <section className="contents">
      <div className="image">
        <img
          src={"pexels-carlos-oliva-3586966.jpg"}
          alt={IMAGES.mainImageTitle}
        />
        <AboutMe />
      </div>
      <Posts />

      {selectedPost && <SinglePost />}
    </section>
  );
};

export default Contents;
