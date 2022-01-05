import React, { Component } from "react";
import "../styles/Housedetailsheader.css";
import HouseRating from "./HouseRating";

class HouseDetailsHeader extends Component {
  render() {
    return (
      <div className="house-details__header">
        <div className="house-details__header-left">
          <h1>{this.props.title}</h1>
          <p>{this.props.location}</p>
          <ul className="house-details__header-tagsbox">
            {this.props.tags.map((oneTag) => (
              <li key={oneTag}>{oneTag}</li>
            ))}
            {/* <p>tags</p> */}
          </ul>
        </div>
        <div className="house-details__header-right">
          <div className="house-details__header__identification">
            <div className="house-details__header__identification__name">
              {this.props.hostname.name}
            </div>

            <div className="house-details__header__identification__picture">
              <img src={this.props.hostpicture.picture} alt="" />
            </div>
          </div>
          {/* <div className="rating">{this.props.rating}</div> */}
          <div className="house-details__header__rating">
            <HouseRating key={this.props.rating} rating={this.props.rating} />
          </div>
        </div>
      </div>
    );
  }
}

export default HouseDetailsHeader;
