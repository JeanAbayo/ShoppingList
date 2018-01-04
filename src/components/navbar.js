import React, { Component } from "react";
import shoppinglistlogo from "../images/sl_logo.png";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default sl_header">
				<div className="container-fluid">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
							aria-expanded="false"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="navbar-brand" href="/">
							<img
								src={shoppinglistlogo}
								alt="Shopping List Logo"
							/>
						</a>
					</div>
					<div
						className="collapse navbar-collapse sl_collapse"
						id="bs-example-navbar-collapse-1"
					>
						<ul className="nav navbar-nav">
							<li>
								<a href="explore.html">
									<span
										className="glyphicon glyphicon-globe"
										aria-hidden="true"
									/>
									Explore
								</a>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="login.html">
									<span
										className="glyphicon glyphicon-log-in"
										aria-hidden="true"
									/>
									Login
								</a>
							</li>
							<li>
								<a href="/">
									<span
										className="glyphicon glyphicon-user"
										aria-hidden="true"
									/>
									Signup
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
