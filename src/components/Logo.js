import React from "react";
import logo from "../assets/logo_header.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo_header">
        <img src={logo} alt="kasa" />
      </div>
    );
  }
}

export default Logo;
