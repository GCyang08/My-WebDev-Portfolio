import React from "react";
import "./Project.css";

import { Card, makeStyles } from "@material-ui/core";

function Project(props) {
  const useStyles = makeStyles({
    root: {
      width: "300px",
      height: "200px",
      padding: "15px",
      textAlign: "center",
    },
  });
  const classes = useStyles();

  return (
    <div className="Project">
      <Card className={classes.root}>
        <h3>{props.repoName}</h3>
        <img src={props.repoGithubUrl} />
        <div className="ProjectLinks">
          <a target="_blank" href={props.repoGithubUrl}>
            View Github Repo
          </a>
          <a target="_blank" href={props.repoHomePage}>
            View Homepage
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Project;
