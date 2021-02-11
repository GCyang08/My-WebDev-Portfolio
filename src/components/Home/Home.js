import React from "react";
import classes from "./Home.module.css";
import arrow from "../../assets/arrow.png";

function Home() {
  return (
    <section className={classes.Intro}>
      <div className={classes.Text}>
        <h2>
          Hi, <span className={classes.Span}> I'm Gao...</span>
        </h2>
        <h2>a UX/UI Designer and Web Developer with a passion</h2>
        <button onClick="TO ABOUT">
          <div className={classes.Button}>
            <p>View my Projects</p>
            <img className={classes.Arrow} src={arrow} alt="arrow icon" />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Home;
