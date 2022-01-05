import React, { Component } from "react";
import "../styles/Housedetailscontent.css";

class HouseDetailsContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleDescription: false,
      visibleEquipment: false,
    };
  }

  hideDescription = () => {
    this.setState({ visibleDescription: !this.state.visibleDescription });
  };

  hideEquipment = () => {
    this.setState({ visibleEquipment: !this.state.visibleEquipment });
  };

  render() {
    return (
      <div className="house-details__box">
        <div className="house-details__description-box">
          <div className="house-details__description-box__title">
            Description
            <i
              className={
                this.state.visibleDescription
                  ? "fas fa-chevron-up"
                  : "fas fa-chevron-down"
              }
              onClick={this.hideDescription}
            ></i>
          </div>

          {this.state.visibleDescription ? (
            <p className="house-details__description-box__content">
              {this.props.description}
            </p>
          ) : null}
        </div>

        <div className="house-details__equipment-box">
          <div className="house-details__equipment-box__title">
            Equipements
            <i
              className={
                this.state.visibleEquipment
                  ? "fas fa-chevron-up"
                  : "fas fa-chevron-down"
              }
              onClick={this.hideEquipment}
            ></i>
          </div>
          {this.state.visibleEquipment ? (
            <ul className="house-details__equipment-box__list">
              {this.props.equipments.map((oneEquipment) => (
                <li key={oneEquipment}>{oneEquipment}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HouseDetailsContent;
