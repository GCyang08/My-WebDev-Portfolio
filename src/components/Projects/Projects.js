import React from "react";

import cbl from "../../assets/Clip-Board-Icon.jpg";
import ebi from "../../assets/EasyBank-Icon.JPG";
import ip from "../../assets/Ip-Icon.JPG";
import portfolio from "../../assets/Portfolio.JPG";
import dashboard from "../../assets/DashBoard.JPG";
import list from "../../assets/Todo-List.JPG";

import "./Projects.css";
import Project from "./Project/Project";

function Projects(props) {
  const images = [
    `url(${cbl})`,
    `url(${ebi})`,
    `url(${ip})`,
    `url(${portfolio})`,
    `url(${dashboard})`,
    `url(${list})`,
  ];

  return (
    <section className="Wrapper" id="projects">
      <div>
        <h1>PROJECTS</h1>
        <div className="Projects">
          {props.repoData.map((repo, i) => {
            return (
              <Project
                image={images[i]}
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
