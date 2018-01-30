import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/LogoutAction";

class Menu extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/explore">
            Explore
          </Link>
        </li>
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
        <li className="nav-item">
          <button className="nav-link MenuButton" onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </ul>
    );
  }
}

export default connect(null, { logout })(Menu);
