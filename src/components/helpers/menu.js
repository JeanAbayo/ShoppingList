import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/LoginActions";

class Menu extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    return (
      <ul className="navbar-nav ml-auto">
        {isAuthenticated ? null : (
          <li className="nav-item active">
            <Link className="nav-link" to="/explore">
              Explore
            </Link>
          </li>
        )}
        {isAuthenticated ? null : (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
        {isAuthenticated ? null : (
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
        )}
        {isAuthenticated ? (
          <li className="nav-item">
            <button className="nav-link MenuButton" onClick={this.props.logout}>
              Logout
            </button>
          </li>
        ) : null}
        {isAuthenticated ? (
          <li className="nav-item">
            <Link className="nav-link MenuButton" to="/profile">
              Profile
            </Link>
          </li>
        ) : null}
      </ul>
    );
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
