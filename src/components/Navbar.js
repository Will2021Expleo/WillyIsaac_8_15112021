import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo_header.png";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <img src={logo} alt="kasa" />
        <div className="navbox">
          <NavLink exact to="/" activeClassName="nav-active">
            Accueil
          </NavLink>

          <NavLink exact to="/About" activeClassName="nav-active">
            A propos
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
