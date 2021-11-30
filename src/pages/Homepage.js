import React, { Component } from "react";
import AdsHome from "../components/AdsHome";
import BannerHome from "../components/BannerHome";

// import "../styles/App.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <BannerHome />
        <AdsHome />
      </div>
    );
  }
}

export default Homepage;
