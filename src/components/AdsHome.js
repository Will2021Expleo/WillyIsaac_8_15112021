import React from "react";
import { Adslist } from "../datas/Adslist";
import "../styles/Adshome.css";
import { Link } from "react-router-dom";

//les différentes annonces de maison sur la page d'accueil "Homepage"
class Adshome extends React.Component {
  render() {
    return (
      <div>
        <ul className="adshome__box">
          {Adslist.map((ads) => (
            <li className="adshome__content" key={ads.id}>
              <Link to={"/HouseDetails/" + ads.id}>
                <img className="adshome__image-cover" src={ads.cover} alt="" />
              </Link>
              <p>{ads.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Adshome;
