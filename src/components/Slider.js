import React, { Component } from "react";
import leftArrow from "../assets/previous.png";
import rightArrow from "../assets/next.png";
import "../styles/Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.picture = this.props.pictures;
    this.arrayPicturesLength = this.props.pictures.length;
    this.state = { currentSlide: 0 };
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === this.props.pictures.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
    // console.log("vers la droite");
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? this.props.pictures.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
    // console.log("vers la gauche");
  };

  render() {
    return (
      <div className="slider__box">
        <div className="slider__box__slide">
          {/* Déplacement vers la gauche */}
          <div className="slider__box__slide__left" onClick={this.prevSlide}>
            <img
              src={leftArrow}
              alt="slide to left"
              style={this.arrayPicturesLength === 1 ? { display: "none" } : {}}
            />
          </div>
          {/* Affichage des images */}
          {this.props.pictures.map((item, index) => {
            return (
              <img
                src={item}
                alt=""
                key={index}
                className={
                  index === this.state.currentSlide
                    ? "slider__box__slide__active-image"
                    : "slider__box__slide__hidden"
                }
              />
            );
          })}
          {/* Pagination (image en cours/nb tot d'image) */}
          <div className="slide__number">
            <div className="slide__number__index">
              {this.state.currentSlide + 1}/{this.props.pictures.length}
            </div>
          </div>
          {/* Déplacement vers la droite */}
          <div className="slider__box__slide__right" onClick={this.nextSlide}>
            <img
              src={rightArrow}
              alt="slide to right"
              style={this.arrayPicturesLength === 1 ? { display: "none" } : {}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
