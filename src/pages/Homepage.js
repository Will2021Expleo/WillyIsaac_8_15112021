import React, { Component } from "react";
import Adshome from "../components/Adshome";
import Bannerhome from "../components/Bannerhome";

// import "../styles/App.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Bannerhome />
        <Adshome />
      </div>
    );
  }
}

export default Homepage;
