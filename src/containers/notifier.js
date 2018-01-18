import React, { Component } from "react";
import { AlertList } from "react-bs-notifier";

class Notifier extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		};
		this.hideNotifier = this.hideNotifier.bind(this);
	}
	hideNotifier() {
		this.setState({
			display: false
		});
	}

	render() {
		if (!this.state.display) {
			return null;
		}
		const payloadMessage = this.props.message.message;
		let notifications = [];
		if (typeof payloadMessage === "string") {
			notifications = {
				id: new Date().getTime(),
				type: this.props.type,
				message: payloadMessage
			};
		}
		// Handle errors in arrays
		let alerts = [];
		alerts.push(notifications);
		return (
			<div className="notifier-display">
				<AlertList
					alerts={alerts}
					timeout={10000}
					onDismiss={this.hideNotifier}
				/>
			</div>
		);
	}
}

export default Notifier;
