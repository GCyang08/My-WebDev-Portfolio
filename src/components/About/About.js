import React from "react";

import "./About.css";

import Chart from "./Chart/Chart";

import phoneLaptop from "../../assets/phone-laptop.svg";
import lightBulb from "../../assets/light-bulb.svg";
import rocket from "../../assets/rocket.svg";
import speedoMeter from "../../assets/speedometer.svg";

function About() {
  return (
    <section className="About" id="about">
      <div>
        <h1>ABOUT</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Chart />
        <div className="Wrap">
          <div className="Offer">
            <div>
              <img src={phoneLaptop} alt="phone laptop icon" />
              <h3>Reponsive</h3>
              <p>My layouts will work on any device, big or small</p>
            </div>
            <div>
              <img src={speedoMeter} alt="light bulb icon" />
              <h3>Fast</h3>
              <p>Fast load times and lag free interaction.</p>
            </div>
          </div>
          <div className="Offer">
            <div>
              <img src={lightBulb} alt="light bulb icon" />
              <h3>Intuitive</h3>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
            <div>
              <img src={rocket} alt="light bulb icon" />
              <h3>Dynamic</h3>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
