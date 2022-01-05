import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes />

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
