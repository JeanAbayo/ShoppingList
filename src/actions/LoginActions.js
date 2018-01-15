import axios from "axios";

import { url } from "../config";
import { LOGING_IN, LOGIN_SUCCEEDS, LOGIN_FAILS } from "./constants";

export function login() {
	return {
		type: LOGING_IN
	};
}
export function loginSucceeds(data) {
	return {
		type: LOGIN_SUCCEEDS,
		data
	};
}
export function loginFails(data) {
	return {
		type: LOGIN_FAILS,
		data
	};
}
