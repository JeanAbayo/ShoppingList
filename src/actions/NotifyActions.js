import { SUCCESS, DANGER, CLEAR } from "./constants";

export function success(data) {
	return {
		type: SUCCESS,
		data
	};
}

export function danger(data) {
	return {
		type: DANGER,
		data
	};
}

export function clear() {
	return {
		type: CLEAR
	};
}
