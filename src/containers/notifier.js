import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class Notifier extends Component {
	toastId = null;

	componentWillReceiveProps(nextProps) {
		if (!toast.isActive(this.toastId)) {
			const errorType = this.props.message.type;
			this.toastId = toast(this.props.message.data.message, {
				autoClose: 5000,
				closeButton: null, // Use Autoclose button
				hideProgressBar: true,
				pauseOnHover: true,
				type: errorType.toLowerCase()
			});
		}
	}

	render() {
		return (
			<div>
				<ToastContainer />
			</div>
		);
	}
}

export default Notifier;
