import axios from "axios";

import { url } from "../instance/config";
import { LOGING_IN, LOGIN_SUCCEEDS, LOGIN_FAILS, LOGOUT } from "./constants";

import Api from "./Api";

import { error as danger, success, warning, clear } from "./NotifyActions";

export function logingIn() {
	return {
		type: LOGING_IN
	};
}

export function loginSucceeds(payload) {
	return {
		type: LOGIN_SUCCEEDS,
		payload
	};
}

export function loginFails(payload) {
	return {
		type: LOGIN_FAILS,
		payload
	};
}

export function logged_out(payload) {
	return {
		type: LOGOUT,
		payload
	};
}

export function login(userData) {
	return dispatch => {
		dispatch(logingIn());
		return axios
			.post(url + "/auth/login", userData)
			.then(response => {
				localStorage.setItem("token", response.data.token);
				dispatch(loginSucceeds(response.data));
				dispatch(success(response.data));
				return dispatch(clear(null));
			})
			.catch(error => {
				if (error.response) {
					dispatch(loginFails(error.response.data));
					dispatch(danger(error.response.data));
					return dispatch(clear(null));
				}
			});
	};
}

export const logout = () => {
	return dispatch => {
		Api.logout("auth/logout")
			.Logout()
			.then(response => {
				localStorage.removeItem("token");
				dispatch(logged_out(response.data));
				dispatch(warning(response.data));
				return dispatch(clear(null));
			})
			.catch(error => {
				if (error.response.status === 401) {
					localStorage.removeItem("token");
					dispatch(logged_out(error.response.data));
					dispatch(danger(error.response.data));
					return dispatch(clear(null));
				} else {
					dispatch(warning(error.response.data));
					return dispatch(clear(null));
				}
			});
	};
};
