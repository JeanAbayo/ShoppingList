import React, { Component } from "react";
import { Link } from "react-router-dom";
import shoppinglistlogo from "../../images/sl_logo.png";
import Menu from "./menu";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light sl_header">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						<img src={shoppinglistlogo} alt="Shopping List Logo" />
					</Link>
					<button
						className="navbar-toggler custom-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
				</div>
				<div
					className="collapse navbar-collapse sl_collapse"
					id="navbarNavDropdown"
				>
					<Menu />
				</div>
			</nav>
		);
	}
}

export default Navbar;
