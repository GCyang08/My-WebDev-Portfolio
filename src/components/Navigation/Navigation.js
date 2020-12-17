import React from "react";
import classes from "./Navigation.module.css";
import Container from "@material-ui/core/Container";

const Navigation = (props) => {
  return (
    <div className={classes.NavDesign}>
      <Container>
        <div className={classes.NavBar}>
          <div className={classes.Logo}>
            <a>GCY</a>
          </div>
          <div className={classes.Navigation}>
            <nav>
              <ul>
                <li>ABOUT</li>
                <li>WORK</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
