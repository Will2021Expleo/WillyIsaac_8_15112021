import React from "react";
import bannerHome from "../assets/banner_home-page.png";
import "../styles/Banner.css";

class BannerHome extends React.Component {
  render() {
    return (
      <div className="bannerHome__box">
        <img className="bannerHome__header" src={bannerHome} alt="home" />
        <p>Chez vous, et partout ailleurs</p>
      </div>
    );
  }
}

export default BannerHome;
