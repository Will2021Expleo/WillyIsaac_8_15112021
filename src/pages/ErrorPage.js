import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Errorpage.css";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <div className="error">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>

        <Link to="/">
          <h4 className="error__link">Retourner à la page d'accueil</h4>
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
