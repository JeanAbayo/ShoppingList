import React, { Component } from "react";
import "./styles/App.css";
import "./styles/custom.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
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
