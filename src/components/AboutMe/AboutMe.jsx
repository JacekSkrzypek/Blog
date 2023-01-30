import React from "react";
import "./style.css";
import { TEXTS } from "../../constans";

const AboutMe = () => {
  return (
    <aside>
      <article className="about-me">
        <h1>About me</h1>
        <p>{TEXTS.loremIpsum}</p>
      </article>
    </aside>
  );
};

export default AboutMe;
