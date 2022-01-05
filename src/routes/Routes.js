import React from "react";

import { Switch, Route } from "react-router-dom";

//import des differentes pages
import HomePage from "../pages/HomePage";
import HouseDetails from "../pages/HouseDetails";
import About from "../pages/About.js";
import ErrorPage from "../pages/ErrorPage.js";

class Routes extends React.Component {
  render() {
    const Pages = [
      // Page acceuil
      {
        path: "/",
        component: HomePage,
        exact: true,
      },

      // Page des logements
      //id désigne un lien spécique qui correspond à l'id de l'élément cliqué
      {
        path: "/houseDetails/:id",
        component: HouseDetails,
      },

      // Page A Propos
      {
        path: "/About",
        component: About,
      },

      // Page Erreur 404
      {
        path: "*",
        component: ErrorPage,
      },
    ];
    return (
      <Switch>
        {Pages.map((page, index) => (
          <Route key={index} {...page} />
        ))}
      </Switch>
    );
  }
}
export default Routes;
