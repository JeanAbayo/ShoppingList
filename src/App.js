import React, { Component } from "react";
// For Routing
// import { createStore, combineReducers, applyMiddleware } from "redux";
import { Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ConnectedRouter } from "react-router-redux";

import { configureStore, history } from "./instance/configureStore";

// Import primary components
import Explore from "./components/explore";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
// import secondary components
import Navbar from "./components/helpers/navbar";
import Footer from "./components/helpers/footer";
import ProtectedRoute from "./routes/ProtectedRoute";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="wrapper">
            <section className="sl_hero">
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/signup" component={Home} />
              <Route path="/login" component={Login} />
              <ProtectedRoute
                path="/profile"
                component={Profile}
                history={history}
              />
            </section>
            <section className="sl_footer">
              <Footer />
            </section>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
