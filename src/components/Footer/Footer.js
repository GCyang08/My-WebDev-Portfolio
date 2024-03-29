import React from "react";

import myResume from "../../documents/gcyaj_resume.pdf";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import resume from "../../assets/resume.png";

import  classes from "./Footer.module.css";

function Footer() {
  const linkedinLink = {
    href: "https://www.linkedin.com/in/gaoy08/",
    target: "_blank",
  };
  const githubLink = {
    href: "https://github.com/GCyang08",
    target: "_blank",
  };
  const resumeFile = {
    href: myResume,
    target: "_blank",
  };

  const gaosFiles = {
    files: [
      { link: linkedinLink, src: linkedin, alt: "linkedin icon" },
      { link: githubLink, src: github, alt: "github icon" },
      { link: resumeFile, src: resume, alt: "resume icon" },
    ],
  };
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.links_layout}>
          {gaosFiles.files.map((links, i) => {
            return (
              <section key={i} className={classes['footer__link-images']}>
                <a {...links.link}>
                  <img className={classes['image-links']} src={links.src} alt={links.alt} />
                </a>
              </section>
            );
          })}
        </div>
        <p>Email: gcyaj08@gmail.com</p>
        <p>
          GAO YANG <span>&copy; 2021</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
