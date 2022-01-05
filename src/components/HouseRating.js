import React, { Component } from "react";
import fullRating from "../assets/Star_Full.png";
import emptyRating from "../assets/Star_Empty.png";

class HouseRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starNumber: this.props.rating,
    };
    // console.log(this.state);
  }

  render() {
    let images = [];
    // console.log(this.state.starNumber);
    for (let i = 0; i < this.state.starNumber; i++) {
      images.push(
        <img
          key={images}
          className="house-details__header__rating-image"
          src={fullRating}
          alt=""
        />
      );
    }
    let grayStars = 5 - this.state.starNumber;
    for (let i = 0; i < grayStars; i++) {
      images.push(
        <img
          key={images}
          className="house-details__header__rating-image"
          src={emptyRating}
          alt=""
        />
      );
    }
    return <div>{images}</div>;
  }
}

export default HouseRating;
