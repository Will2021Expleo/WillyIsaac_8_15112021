import React, { Component } from "react";
import bannerAbout from "../assets/banner_about.png";
import AboutFiability from "../components/AboutFiability";
import AboutRespect from "../components/AboutRespect";
import AboutServices from "../components/AboutServices";
import AboutSecurity from "../components/AboutSecurity";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <div className="about__box-banner">
        <img className="about__header-banner" src={bannerAbout} alt="About" />
        <div className="about__content">
          {/* Fiabilité */}
          <AboutFiability />
          {/* Respect */}
          <AboutRespect />
          {/* Services */}
          <AboutServices />
          {/* Sécurité */}
          <AboutSecurity />
        </div>
      </div>
    );
  }
}

export default About;
