import React, { useState, useEffect } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";

function Portfolio() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/GCyang08/repos", {})
      .then((response) => response.json())
      .then((response) => {
        setRepoData(response);
        console.log("Response:", response);
      });
  }, []);

  return (
    <div>
      <Home />
      <NavBar />
      <About />
      <Projects repoData={repoData} />
      <Footer />
    </div>
  );
}

export default Portfolio;
