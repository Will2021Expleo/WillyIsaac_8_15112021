import React, { Component } from "react";

class SubAbout extends Component {
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
      <div className="about_box">
        <div className="about__title">
          <h3>{this.props.title}</h3>
          <i
            key={this.props.title}
            className={
              this.state.visible ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }
            onClick={this.hideContent}
          ></i>
        </div>
        <div className="about__description">
          {this.state.visible ? <p>{this.props.description}</p> : null}
        </div>
      </div>
    );
  }
}

export default SubAbout;
