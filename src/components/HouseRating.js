import React, { Component } from "react";
import fullRating from "../assets/Star_Full.png";
import emptyRating from "../assets/Star_Empty.png";

class HouseRating extends Component {
  constructor(props) {
    super(props);
    this.number = this.props.rating;
    this.state = {
      starNumber: 5,
    };
    console.log(this.state);
  }

  starScale = () => {
    let scaleFullStar =
      this.state.starNumber === 5
        ? <img src={fullRating} alt="" /> * 5
        : <img src={fullRating} alt="" /> * this.number +
          <img src={emptyRating} alt="" /> * (5 - this.number);
    this.setState({ starNumber: scaleFullStar }, () => {
      console.log(scaleFullStar);
    });
  };

  render() {
    return (
      <div>
        {/* {this.starScale} */}

        {/* <img src={fullRating} alt="" /> */}
      </div>
    );
  }
}

export default HouseRating;
