import React, { Component } from "react";
import { connect } from "react-redux";
import * as Icon from "react-ionicons";

import { login } from "../actions/LoginActions";

// Import Error notifier
import Notifier from "./notifier";
import Loader from "../components/loader";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        email: "",
        password: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      userData: { ...this.state.userData, [name]: value }
    });
  }

  authenticateUser = event => {
    event.preventDefault();
    this.props.login(this.state.userData);
  };

  // After a succesful login, redirect to profile
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="panel-body">
        {this.props.logging_in ? <Loader /> : null}
        {this.props.notify.type ? (
          <Notifier message={this.props.notify} />
        ) : null}
        <form className="form-horizontal" onSubmit={this.authenticateUser}>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-mail-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              name="email"
              minLength="6"
              value={this.state.userData.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-lock-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              name="password"
              minLength="6"
              value={this.state.userData.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group last">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-success btn-sm">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { error, payload, isAuthenticated, logging_in } = state.login;
  const { notify } = state;
  return {
    error,
    payload,
    isAuthenticated,
    logging_in,
    notify
  };
}

export default connect(mapStateToProps, { login })(LoginContainer);
