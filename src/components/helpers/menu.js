import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
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
  </ul>
);

export default Menu;
