import React from "react";
import "../styles/Housedetails.css";
import Slider from "./Slider";
import Housedetails_header from "./Housedetails_header";
import Housedetails_content from "./Housedetails_content";

class HouseDetails extends React.Component {
  render() {
    return (
      <div>
        <Slider />

        <Housedetails_header />

        <Housedetails_content />
      </div>
    );
  }
}

export default HouseDetails;
