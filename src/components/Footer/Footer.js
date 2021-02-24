import React from "react";

import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.Icon}>
        <img src={linkedin} alt="linkedin icon" />
        <img src={github} alt="github icon" />
        <p>
          GAO YANG <span>&copy; 2021</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
