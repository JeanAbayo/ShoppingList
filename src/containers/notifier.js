import React, { Component } from "react";
import { Alert } from "react-bs-notifier";
// console.log(this.props);

class Notifier extends Component {
	render() {
		console.log(this.props.store.getState());
		return (
			<div>
				<Alert type="danger" headline="Error!">
					Holy cow, man!
				</Alert>
			</div>
		);
	}
}
export default Notifier;
