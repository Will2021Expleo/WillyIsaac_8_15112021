import React, { Component } from "react";
import logo from "../assets/logo_footer.png";
import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img src={logo} className="logo__footer" alt="logo footer" />
        <p>
          <i className="far fa-copyright"></i> 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
  }
}

export default Footer;
