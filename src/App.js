import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Errorpage from "./components/Errorpage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Housedetails from "./pages/Housedetails";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" exact component={About} />
            <Route path="/housedetails/:id" component={Housedetails} />
            {/* id désigne un lien spécique qui correspond à l'id de l'élément cliqué */}
            <Route component={Errorpage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
