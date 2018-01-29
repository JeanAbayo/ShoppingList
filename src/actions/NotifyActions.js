import { SUCCESS, ERROR, CLEAR, INFO, WARN } from "./constants";

export const success = data => {
	return {
		type: SUCCESS,
		data
	};
};

export const error = data => {
	return {
		type: ERROR,
		data
	};
};

export const info = data => {
	return {
		type: INFO,
		data
	};
};

export const warn = data => {
	return {
		type: WARN,
		data
	};
};

export const clear = () => {
	return {
		type: CLEAR
	};
};
