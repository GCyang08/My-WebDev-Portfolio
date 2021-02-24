import React from "react";

import "./Projects.css";
import Project from "./Project/Project";

function Projects(props) {
  return (
    <section className="Wrapper" id="projects">
      <div>
        <h1>PROJECTS</h1>
        <div className="Projects">
          {props.repoData.map((repo) => {
            return (
              <Project
                key={repo.id}
                repoName={repo.name}
                repoGithubUrl={repo.html_url}
                repoHomePage={repo.homepage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
