import React, { Component } from "react";
import AdsHome from "./AdsHome";
import BannerHome from "./BannerHome";

import "../styles/App.css";

class Homepage extends Component {
  render() {
    return (
      <>
        <BannerHome />
        <AdsHome />
      </>
    );
  }
}

export default Homepage;
