import React from "react";
import "../modules.css";
import { TEXTS } from "../../constants";

const AboutMe = () => {
  return (
    <aside className="about-me-aside">
      <article className="about-me">
        <h1 className="header">About me</h1>
        <p className="content">{TEXTS.loremIpsum}</p>
      </article>
    </aside>
  );
};

export default AboutMe;
