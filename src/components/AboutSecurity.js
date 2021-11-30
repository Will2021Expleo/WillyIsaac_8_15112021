import React, { Component } from "react";

class AboutSecurity extends Component {
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
      <div className="about__security">
        <h3 className="about__security__title">
          Sécurité{" "}
          <i
            className={
              this.state.visible ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }
            onClick={this.hideContent}
          ></i>
        </h3>

        {this.state.visible ? (
          <p className="about__security__content">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        ) : null}
      </div>
    );
  }
}

export default AboutSecurity;
