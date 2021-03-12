import React from "react";

import "./About.css";

import Skills from "./Skills/Skills";

import phoneLaptop from "../../assets/phone-laptop.svg";
import lightBulb from "../../assets/light-bulb.svg";
import rocket from "../../assets/rocket.svg";

function About() {
  const aboutGao = {
    about: [
      {
        src: phoneLaptop,
        alt: "phone-laptop icon",
        header: "Responsive",
        pg: "My layouts will work on any device, big or small",
      },
      {
        src: rocket,
        alt: "light bulb icon",
        header: "Effective",
        pg:
          " Websites don't have to be static, I love making pages come to life.",
      },
      {
        src: lightBulb,
        alt: "rocket icon",
        header: "Comprehensible",
        pg: "Strong preference for easy to use, intuitive UX/UI.",
      },
    ],
  };
  return (
    <section className="About" id="about">
      <div>
        <h1>ABOUT</h1>
        <p>
          I am a self-taught front end developer. I primarily focus on writing
          clean, elegant, and efficient code. I am passionate about creating
          responsive web apps and making them come to life. I’ve built a few
          projects by myself and I am looking for a role where I can grow and
          learn.
        </p>
        <Skills />
        <div className="Wrap">
          {aboutGao.about.map((about, i) => {
            return (
              <div key={i}>
                <img src={about.src} alt={about.alt} />
                <h3>{about.header}</h3>
                <p>{about.pg}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default About;
