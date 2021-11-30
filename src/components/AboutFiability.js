import React, { Component } from "react";

class AboutFiability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  hideContent = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div className="about__fiability">
        <h3 className="about__fiability__title">
          Fiabilité
          <i
            className={
              this.state.visible ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }
            onClick={this.hideContent}
          ></i>
        </h3>

        {this.state.visible ? (
          <p className="about__fiability__content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        ) : null}
      </div>
    );
  }
}

export default AboutFiability;
