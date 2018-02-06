import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardContainer extends Component {
  render() {
    return <div className="container">Welcome To the dashboard</div>;
  }
}

function mapStateToProps(state) {
  const { error, payload, isAuthenticated } = state.login;
  return {
    error,
    payload,
    isAuthenticated
  };
}

export default connect(mapStateToProps, {})(DashboardContainer);
