import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./components/ErrorPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import HouseDetails from "./pages/HouseDetails";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route path="/houseDetails/:id" component={HouseDetails} />
            {/* id désigne un lien spécique qui correspond à l'id de l'élément cliqué */}
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
