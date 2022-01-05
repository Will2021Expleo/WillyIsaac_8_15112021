import React, { Component } from "react";
import AdsHome from "../components/AdsHome";
import BannerHome from "../components/BannerHome";

// import "../styles/App.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <BannerHome />
        <AdsHome />
      </div>
    );
  }
}

export default HomePage;
