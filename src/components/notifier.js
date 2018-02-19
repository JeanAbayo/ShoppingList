import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class Notifier extends Component {
	toastId = null;

	componentDidUpdate() {
		if (this.props.message.data) {
			if (!toast.isActive(this.toastId)) {
				const errorType = this.props.message.type;
				const { message } = this.props.message.data;
				let errorMessage = "";
				Array.isArray(message)
					? (errorMessage = message.toString())
					: (errorMessage = this.props.message.data.message);
				this.toastId = toast(errorMessage, {
					autoClose: 5000,
					closeButton: null, // Use Autoclose button
					hideProgressBar: true,
					pauseOnHover: true,
					type: errorType.toLowerCase()
				});
			}
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
