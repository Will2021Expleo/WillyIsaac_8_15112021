import React, { Component } from "react";
import "../styles/Housedetails.css";
import Slider from "../components/Slider";
import Housedetailsheader from "../components/Housedetailsheader";
import Housedetailscontent from "../components/Housedetailscontent";
import Errorpage from "../components/Errorpage";

import { Adslist } from "../datas/Adslist";

class Housedetails extends React.Component {
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

        <Housedetailsheader
          title={this.state.currentHouse.title}
          location={this.state.currentHouse.location}
          rating={this.state.currentHouse.rating}
          tags={this.state.currentHouse.tags}
          hostname={this.state.currentHouse.host}
          hostpicture={this.state.currentHouse.host}
        />

        <Housedetailscontent
          description={this.state.currentHouse.description}
          equipments={this.state.currentHouse.equipments}
        />
      </div>
    ) : (
      <Errorpage />
    );
  }
}

export default Housedetails;
