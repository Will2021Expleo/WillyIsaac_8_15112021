import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Errorpage from "./ErrorPage";
import About from "./About";
import Footer from "./Footer";
import Housedetails from "./HouseDetails";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/About" exact component={About} />
            <Route path="/HouseDetails" exact component={Housedetails} />
            <Route component={Errorpage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
