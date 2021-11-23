import React from "react";
import { adsList } from "../datas/adsList";
import "../styles/Adshome.css";
import { Link } from "react-router-dom";

class AdsHome extends React.Component {
  render() {
    return (
      <div>
        <ul className="adshome-content">
          {adsList.map((ads) => (
            <li className="box-content" key={ads.id}>
              <Link to="/HouseDetails">
                <img className="image__cover" src={ads.cover} alt="" />
              </Link>
              {ads.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdsHome;
