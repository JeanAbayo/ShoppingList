import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/LoginActions";

class Menu extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    if (isAuthenticated) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link MenuButton" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link MenuButton" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link MenuButton" onClick={this.props.logout}>
              Logout
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
        </ul>
      );
    }
  }
}

function mapStateToProps(state) {
  const { isAuthenticated } = state.login;
  const { notify } = state;
  return {
    isAuthenticated,
    notify
  };
}

export default connect(mapStateToProps, { logout })(Menu);
