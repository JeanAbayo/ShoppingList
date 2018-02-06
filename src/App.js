import React, { Component } from "react";

// For Routing
import { Route } from "react-router-dom";

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import configureStore from "./instance/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";

// Import primary components
import Explore from "./components/explore";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
import DashboardContainer from "./containers/dashboardContainer";

// import secondary components
import Navbar from "./components/helpers/navbar";
import Footer from "./components/helpers/footer";
import ProtectedRoute from "./routes/ProtectedRoute";
import createHistory from "history/createBrowserHistory";

const history = createHistory();
const { persistor, store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
          <ConnectedRouter history={history}>
            <div className="wrapper">
              <section className="sl_hero">
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/explore" component={Explore} />
                <Route path="/signup" component={Home} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute
                  path="/dashboard"
                  component={DashboardContainer}
                />
              </section>
              <section className="sl_footer">
                <Footer />
              </section>
            </div>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
