import React, { Component } from "react";

class AboutRespect extends Component {
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
      <div className="about__respect">
        <h3 className="about__respect__title">
          Respect{" "}
          <i
            className={
              this.state.visible ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }
            onClick={this.hideContent}
          ></i>
        </h3>
        {this.state.visible ? (
          <p className="about__respect__content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        ) : null}
      </div>
    );
  }
}

export default AboutRespect;
