import React from "react";

import "./Skills.css";

import html from "../../../assets/html-5.png";
import css from "../../../assets/css.png";
import js from "../../../assets/javascript.png";
import react from "../../../assets/React.png";
import redux from "../../../assets/redux.png";
import materialUi from "../../../assets/material-ui.png";

function Skills() {
  const logos = {
    img: [
      { src: html, alt: "html logo" },
      { src: css, alt: "css logo" },
      { src: js, alt: "javascript logo" },
      { src: react, alt: "react logo" },
      { src: redux, alt: "redux logo" },
      { src: materialUi, alt: "material ui logo" },
    ],
  };

  return (
    <div className="Skills">
      <h2>Technical Skills</h2>
      <div className="LogoLayout">
        {logos.img.map((images, i) => {
          return (
            <div key={i}>
              <img src={images.src} alt={images.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
