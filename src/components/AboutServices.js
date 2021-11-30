import React, { Component } from "react";

class AboutServices extends Component {
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
      <div className="about__services">
        <h3 className="about__services__title">
          Service
          <i
            className={
              this.state.visible ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }
            onClick={this.hideContent}
          ></i>
        </h3>
        {this.state.visible ? (
          <p className="about__services__content">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        ) : null}
      </div>
    );
  }
}

export default AboutServices;
