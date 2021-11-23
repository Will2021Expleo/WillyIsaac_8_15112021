import React, { Component } from "react";
import bannerAbout from "../assets/banner_about.png";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <div className="bannerAbout__box">
        <img className="bannerAbout__header" src={bannerAbout} alt="About" />
        <div className="about__content">
          <div className="about__fiability">
            <h3 className="aboutFiability__title">
              Fiabilité <i class="fas fa-chevron-down"></i>
            </h3>
            <p className="aboutFiability__content"></p>
          </div>
          <div className="about__fiability">
            <h3 className="aboutFiability__title">
              Respect <i class="fas fa-chevron-down"></i>
            </h3>
            <p className="aboutFiability__content"></p>
          </div>
          <div className="about__fiability">
            <h3 className="aboutFiability__title">
              Service <i class="fas fa-chevron-down"></i>
            </h3>
            <p className="aboutFiability__content"></p>
          </div>
          <div className="about__fiability">
            <h3 className="aboutFiability__title">
              Responsabilité <i class="fas fa-chevron-down"></i>
            </h3>
            <p className="aboutFiability__content"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
