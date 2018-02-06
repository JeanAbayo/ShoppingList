import React, { Component } from "react";
import { connect } from "react-redux";
import * as Icon from "react-ionicons";

import { login } from "../actions/LoginActions";

// Import Error notifier
import Notifier from "./notifier";
import Loader from "../components/loader";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>This is the dashboard</h2>
      </div>
    );
  }
}

export default connect(null, {})(DashboardContainer);
