import axios from "axios";

import { url } from "../instance/config";
import {
	REGISTERING,
	REGISTER_SUCCEEDS,
	REGISTER_FAILS,
	REGISTER_DONE
} from "./constants";

import { error as danger, success, clear } from "./NotifyActions";

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

export function registerDone(data) {
	return {
		type: REGISTER_DONE
	};
}

export function register(newUser) {
	return dispatch => {
		dispatch(registering());
		axios
			.post(url + "/auth/register", newUser)
			.then(response => {
				dispatch(registerSucceeds(response.data));
				dispatch(success(response.data));
				dispatch(clear());
				return dispatch(registerDone());
			})
			.catch(error => {
				if (error.response) {
					dispatch(registerFails(error.response.data));
					dispatch(danger(error.response.data));
					return dispatch(clear());
				}
			});
	};
}
