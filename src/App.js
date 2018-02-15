import React, { Component } from "react";

// For Routing
import { Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import configureStore from "./instance/configureStore";
import { PersistGate } from "redux-persist/lib/integration/react";

// Import primary components
import Explore from "./components/explore";
import Home from "./components/home";
import Login from "./components/login";
import DashboardContainer from "./containers/dashboardContainer";
import ProfileContainer from "./containers/profileContainer";

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
          <Router history={history}>
            <div className="wrapper">
              <section className="sl_hero">
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/explore" component={Explore} />
                  <Route path="/signup" component={Home} />
                  <Route path="/login" component={Login} />
                  <ProtectedRoute
                    path="/profile"
                    component={ProfileContainer}
                  />
                  <ProtectedRoute
                    path="/dashboard"
                    component={DashboardContainer}
                  />
                  <ProtectedRoute
                    path="/shoppinglists/:shoppinglistId"
                    component={DashboardContainer}
                  />
                </Switch>
              </section>
              <section className="sl_footer">
                <Footer />
              </section>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
