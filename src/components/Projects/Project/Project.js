import React from "react";
import classes from "./Project.module.css";

function Project() {
  return (
    <div className={classes.Dummy}>
      <div className={classes.Project}>
        <span>Name of Project</span>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Project}>
        <span>Name of Project</span>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Project;
