import React from "react";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

import "./Footer.css";

function Footer() {
  const githubLink = {
    href: "https://github.com/GCyang08",
    target: "_blank",
  };
  return (
    <div>
      <div></div>
      <div className="Footer">
        <div className="Icon">
          <img src={linkedin} alt="linkedin icon" />
          <a {...githubLink}>
            <img src={github} alt="github icon" />
          </a>
          <p>Email: gcyang08@gmail.com</p>
          <p>Phone Number: 1 (916)-598-0261</p>
          <p>
            GAO YANG <span>&copy; 2021</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
