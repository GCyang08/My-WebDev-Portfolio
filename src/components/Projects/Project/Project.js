import React from "react";
import "./Project.css";

import { Card, makeStyles } from "@material-ui/core";

function Project(props) {
  const useStyles = makeStyles({
    root: {
      backgroundImage: props.image,
      backgroundSize: "cover",
      cursor: "pointer",
      width: "300px",
      height: "200px",
      padding: "15px",
      textAlign: "center",
    },
  });
  const classes = useStyles();

  const githubRepo = {
    href: props.repoGithubUrl,
    target: "_blank",
  };

  const projectHompage = {
    href: props.repoHomePage,
    target: "_blank",
  };

  return (
    <div className="Project">
      <Card className={classes.root}>
        <div className="ProjectOverLay">
          <h3>{props.repoName}</h3>
          <div className="ProjectLinks">
            <div>
              <a {...githubRepo}>View Github Repo</a>
              <a {...projectHompage}>View Homepage</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Project;
