import React from "react";
import "./Project.css";

import github from "../../../assets/github.png";
import eye from "../../../assets/eye.png";

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

  const projectLinks = {
    projects: [
      {
        links: githubRepo,
        src: github,
        alt: "github logo",
        span: "View Github",
      },
      {
        links: projectHompage,
        src: eye,
        alt: "eye icon",
        span: "View Live",
      },
    ],
  };

  return (
    <div className="Project">
      <Card className={classes.root}>
        <div className="ProjectOverLay">
          <h3>{props.repoName}</h3>
          {projectLinks.projects.map((project, i) => {
            return (
              <div key={i} className="ProjectLinks">
                <div>
                  <a {...project.links}>
                    <div className="ImagesLinkLayout">
                      <img
                        className="Images"
                        src={project.src}
                        alt={project.alt}
                      />
                      <span>{project.span}</span>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default Project;
