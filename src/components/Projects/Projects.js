import React from "react";
import classes from "./Projects.module.css";

import Project from "./Project/Project";

function Projects() {
  return (
    <div className={classes.Wrapper}>
      <h1>PROJECTS</h1>
      <Project />
    </div>
  );
}

export default Projects;
