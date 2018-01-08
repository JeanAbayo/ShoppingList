import React, { Component } from "react";
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
						className="navbar-toggler"
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
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="/explore">
								<span
									className="glyphicon glyphicon-globe"
									aria-hidden="true"
								/>
								Explore{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/login">
								<span
									className="glyphicon glyphicon-log-in"
									aria-hidden="true"
								/>
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/signup">
								<span
									className="glyphicon glyphicon-user"
									aria-hidden="true"
								/>
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
