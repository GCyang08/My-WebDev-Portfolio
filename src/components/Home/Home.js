import React from "react";
import { Link } from "react-scroll";
import "./Home.css";
import arrow from "../../assets/arrow.png";

function Home() {
  return (
    <section className="Intro" id="home">
      <div className="Text">
        <h2>
          Hi, <span className="Span">I'm Gao...</span>
          <br />a UX/UI Designer and Web Developer with a passion
        </h2>
        <button className="Button">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="Link"
          >
            <p>View my Portfolio</p>
            <img className="Arrow" src={arrow} alt="arrow icon" />
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Home;
