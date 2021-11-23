import React, { useState, Component } from "react";
import "../styles/Slider.css";
//import BtnSlider from 'BtnSlider'
import { adsList } from "../datas/adsList"; //liste des données pour le slider

class Slider extends Component {
  render() {
    return (
      <div className="container-slider">
        {adsList.map((obj, index) => {
          return (
            <div>
              <img src={obj.pictures} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Slider;

// import React, { Component } from "react";
// import { adsList } from "../datas/adsList";
// // import { Slide } from "react-slideshow-image";

// const props = {};

// class Slideshow extends Component {
//   render() {
//     return (
//       <div slidecontainer>
//         {adsList.map((image) => (
//           <div className="slidecover" key={image.id}>
//             <img className="slidecover" src={image.cover} />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Slideshow;
