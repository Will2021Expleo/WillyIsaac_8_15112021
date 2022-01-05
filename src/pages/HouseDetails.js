import React, { Component } from "react";
import "../styles/Housedetails.css";
import Slider from "../components/Slider";
import HouseDetailsHeader from "../components/HousedDetailsHeader";
import HouseDetailsContent from "../components/HouseDetailsContent";
import ErrorPage from "../components/ErrorPage";

import { Adslist } from "../datas/Adslist";

class HouseDetails extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;

    this.state = { currentHouse: null };
    // console.log(this.state); //=> affiche l'id de l'image cliquée
  }

  componentDidMount() {
    this.setState({
      currentHouse: Adslist.find((currentHouse) => currentHouse.id === this.id),
    });
  }

  render() {
    // console.log(this.props);
    return this.state.currentHouse ? (
      <div>
        <Slider pictures={this.state.currentHouse.pictures} />

        <HouseDetailsHeader
          title={this.state.currentHouse.title}
          location={this.state.currentHouse.location}
          rating={this.state.currentHouse.rating}
          tags={this.state.currentHouse.tags}
          hostname={this.state.currentHouse.host}
          hostpicture={this.state.currentHouse.host}
        />

        <HouseDetailsContent
          description={this.state.currentHouse.description}
          equipments={this.state.currentHouse.equipments}
        />
      </div>
    ) : (
      <ErrorPage />
    );
  }
}

export default HouseDetails;
