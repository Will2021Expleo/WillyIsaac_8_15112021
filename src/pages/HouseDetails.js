import React from "react";
import "../styles/Housedetails.css";
import Slider from "../components/Slider";
import Housedetailsheader from "../components/Housedetailsheader";
import Housedetailscontent from "../components/Housedetailscontent";
import ErrorPage from "../components/ErrorPage";

import { AdsList } from "../datas/AdsList";

class HouseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;

    this.state = { currentHouse: null };
    // console.log(this.state); //=> affiche l'id de l'image cliquée
  }

  componentDidMount() {
    this.setState({
      currentHouse: AdsList.find((currentHouse) => currentHouse.id === this.id),
    });
  }

  render() {
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
      <ErrorPage />
    );
  }
}

export default HouseDetails;
