import React, { Component } from "react";
import { Alert } from "react-bs-notifier";

class Notifier extends Component {
	render() {
		return (
			<div className="notifier-display">
				<Alert type="danger" headline="Error!">
					{this.props.message.message}
				</Alert>
			</div>
		);
	}
}

export default Notifier;
