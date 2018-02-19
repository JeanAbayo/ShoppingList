import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class Notifier extends Component {
	toastId = null;

	componentWillReceiveProps(nextProps) {
		if (nextProps.message.data) {
			if (!toast.isActive(this.toastId)) {
				const errorType = nextProps.message.type;
				const { message } = nextProps.message.data;
				let errorMessage = "";
				Array.isArray(message)
					? (errorMessage = message.toString())
					: (errorMessage = nextProps.message.data.message);
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
