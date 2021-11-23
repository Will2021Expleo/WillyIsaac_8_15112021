import React, { Component } from "react";
import "../styles/Housedetails_header.css";

class Housedetails_header extends Component {
  render() {
    return (
      <div className="houses_header">
        <div className="left">
          <h1>titre</h1>
          <p>localisation</p>
          <div className="tagsbox">
            <p>tags</p>
          </div>
        </div>
        <div className="right">
          <div className="identification">
            <div className="name">Name</div>
            <div className="picture">Picture</div>
          </div>
          <div className="rating">Rating</div>
        </div>
      </div>
    );
  }
}

export default Housedetails_header;
