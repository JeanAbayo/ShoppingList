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
		payload: {
			message: data
		}
	};
}
export function registerFails(data) {
	return {
		type: REGISTER_FAILS,
		payload: {
			message: data
		}
	};
}

export function register(newUser) {
	return dispatch => {
		dispatch(registering());
		axios
			.post(url + "auth/register", newUser)
			.then(response => {
				return dispatch(registerSucceeds(response.data));
			})
			.catch(error => {
				if (error.response) {
					return dispatch(registerFails(error.response.data));
				}
			});
	};
}
