import axios from "axios";

import { push } from "react-router-redux";

import { url } from "../instance/config";
import { LOGING_IN, LOGIN_SUCCEEDS, LOGIN_FAILS, LOGOUT } from "./constants";

import { error as danger, success, warning } from "./NotifyActions";

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
		axios
			.post(url + "auth/login", userData)
			.then(response => {
				localStorage.setItem("token", response.data.token);
				dispatch(success(response.data));
				dispatch(push("/profile"));
				return dispatch(loginSucceeds(response.data));
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					return dispatch(loginFails(error.response.data));
				}
			});
	};
}

axios.interceptors.request.use(
	config => {
		const token = localStorage.getItem("token");
		if (token != null) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function(err) {
		return Promise.reject(err);
	}
);

export const logout = () => {
	return dispatch => {
		axios
			.post(url + "auth/logout")
			.then(response => {
				localStorage.removeItem("token");
				dispatch(warning(response.data));
				return dispatch(logged_out(response.data));
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
				}
			});
	};
};
