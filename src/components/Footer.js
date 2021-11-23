import React, { Component } from "react";
import logo from "../assets/logo_footer.png";
import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={logo} className="logo_footer" />
        <p>
          <i class="far fa-copyright"></i> 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
  }
}

export default Footer;
