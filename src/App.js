import React, { Component } from "react";
// For Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./instance/configureStore";

// Import primary components
import Explore from "./components/explore";
import Home from "./components/home";
import Login from "./components/login";
// import secondary components
import Navbar from "./components/helpers/navbar";
import Footer from "./components/helpers/footer";
// Import styles
import "./styles/App.css";
import "./styles/custom.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
