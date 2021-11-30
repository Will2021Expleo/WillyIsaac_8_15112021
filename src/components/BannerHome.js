import React from "react";
import bannerHome from "../assets/banner_home-page.png";
import "../styles/Banner.css";

//image d'en-tête sur la page d'accueil "Homepage"
class BannerHome extends React.Component {
  render() {
    return (
      <div className="banner__home__box">
        <img className="banner__home__header" src={bannerHome} alt="home" />
        <p>Chez vous, et partout ailleurs</p>
      </div>
    );
  }
}

export default BannerHome;
