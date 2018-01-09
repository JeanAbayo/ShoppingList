import React, { Component } from "react";
// For Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
// Import components
import Explore from "./components/explore";
import Home from "./components/home";
import Login from "./components/login";

// import components
import Navbar from "./components/helpers/navbar";
import Footer from "./components/helpers/footer";
// Import styles
import "./styles/App.css";
import "./styles/custom.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <section className="sl_hero">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/signup" component={Home} />
            <Route path="/login" component={Login} />
          </section>
          <section className="sl_footer">
            <Footer />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
