import React, { Component } from "react";
import * as Icon from "react-ionicons";
import shoppinglistlogo from "../images/sl_logo.png";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light sl_header">
				<div className="navbar-header">
					<a className="navbar-brand" href="/">
						<img src={shoppinglistlogo} alt="Shopping List Logo" />
					</a>
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
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/explore">
								Explore{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/login">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/signup">
								Signup
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
