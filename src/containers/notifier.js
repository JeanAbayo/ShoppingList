import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class Notifier extends Component {
	toastId = null;

	componentWillReceiveProps(nextProps) {
		if (!toast.isActive(this.toastId)) {
			this.toastId = toast(this.props.message.data.message, {
				autoClose: 5000,
				closeButton: null, // Use Autoclose button
				hideProgressBar: true,
				pauseOnHover: true,
				type: toast.TYPE.SUCCESS
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
