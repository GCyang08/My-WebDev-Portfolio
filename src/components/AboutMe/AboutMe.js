import React from "react";
import classes from "./AboutMe.module.css";
import Container from "@material-ui/core/Container";
import html from "../../assets/HTML5.png";
import css from "../../assets/CSS3.png";
import js from "../../assets/Javascript.png";
import react from "../../assets/React.png";
import materialUi from "../../assets/material-ui.png";
import git from "../../assets/git.png";

const AboutMe = (props) => {
  return (
    <div>
      <Container>
        <div className={classes.About}>
          <h1>I'm Gao...</h1>
          <h4>a UI/UX Designer and Front-End Web Developer</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={classes.Skills}>
            <div className={classes.MySkills}>
              <img src={html} alt="html logo" />
              <img src={css} alt="html logo" />
              <img src={js} alt="html logo" />
            </div>
            <div className={classes.MySkills}>
              <img src={react} alt="html logo" />
              <img src={materialUi} alt="html logo" />
              <img src={git} alt="html logo" />
            </div>
          </div>

          <button className={classes.SkillsButton}>SEE MY SKILLS</button>
          <button>SEE MY WORK</button>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
