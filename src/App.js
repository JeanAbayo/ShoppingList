import React, { Component } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import "./styles/App.css";
import "./styles/custom.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="sl_hero">
          <Navbar />
          <Home />
        </section>
        <section className="sl_footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
