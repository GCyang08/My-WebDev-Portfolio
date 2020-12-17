import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import AboutMe from "../../components/AboutMe/AboutMe";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutMe />
      </div>
    );
  }
}

export default Portfolio;
