import React, { Component } from "react";
import "../styles/Housedetails_content.css";

class Housedetails_content extends Component {
  render() {
    return (
      <div>
        <div className="details">
          <div className="description">
            <div className="title">
              Description <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <p className="content">contenu</p>
          </div>
          <div className="equipment">
            <div className="title">
              equipements <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <p className="list">contenu</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Housedetails_content;
