import axios from "axios";

import { url } from "../instance/config";
import { REGISTERING, REGISTER_SUCCEEDS, REGISTER_FAILS } from "./constants";

export function registering() {
	return {
		type: REGISTERING
	};
}
export function registerSucceeds(data) {
	return {
		type: REGISTER_SUCCEEDS,
		data
	};
}
export function registerFails(data) {
	return {
		type: REGISTER_FAILS,
		data
	};
}

export function registerUser(formData) {
	axios
		.post(url + "auth/register", formData)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			if (error.response) {
				// The request was made and the server responded with an error status code
				// console.log($this);
				console.log("We got an error" + error.response);

				// $this.setState({
				// 	errors: {
				// 		...$this.state,
				// 		detailedErrors: error.response.data
				// 	}
				// });
				// console.log($this.state);

				// console.log(this.state);
				// console.log(error.response.status);
				// console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error", error.message);
			}
			console.log("Errororrr");
		});
}

export function register(newUser) {
	return dispatch => {
		console.log("registering ...");
		dispatch(registering());
		registerUser(newUser)
			.then(data => {
				dispatch(registerSucceeds(data));
			})
			.catch((error, dispatch) => dispatch(registerFails(error)));
	};
}
