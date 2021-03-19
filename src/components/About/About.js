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
          I am a curious, creative and passionate self-taught Javascript
          developer that enjoys creating beautiful interfaces and user
          experiences. I am currently looking for a role where I’m allowed to
          grow and mature my skills as a Front-end/UX engineer.
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
