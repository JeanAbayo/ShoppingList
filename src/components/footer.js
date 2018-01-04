import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="col-sm-9">&copy 2017 ShoppingList</div>
				<div className="col-sm-3">
					Made with{" "}
					<span
						className="glyphicon glyphicon-heart"
						aria-hidden="true"
					/>{" "}
					by <a href="https://jeanabayo.github.io">Jean Abayo</a>
				</div>
			</div>
		);
	}
}

export default Footer;
