import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo_header.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar__box">
        <img src={logo} alt="kasa" />
        <div className="navbar__box__content">
          <NavLink exact to="/" activeClassName="navbar__nav-active">
            Accueil
          </NavLink>

          <NavLink exact to="/About" activeClassName="navbar__nav-active">
            A propos
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
