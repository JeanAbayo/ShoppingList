import React, { Component } from "react";
import * as Icon from "react-ionicons";

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-9">&copy; 2017 ShoppingList</div>
					<div className="col-sm-3">
						Made with{" "}
						<Icon
							icon="ios-heart"
							fontSize="15px"
							color="#cd6300"
						/>{" "}
						by <a href="https://jeanabayo.github.io">Jean Abayo</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
