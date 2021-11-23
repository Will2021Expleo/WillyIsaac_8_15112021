import React, { Component } from "react";

//import des composants pour constituer le header
import Navbar from "./Navbar";
import BannerHome from "./BannerHome";

class Header extends Component {
  render() {
    return (
      <div>
        <BannerHome />
      </div>
    );
  }
}

export default Header;
