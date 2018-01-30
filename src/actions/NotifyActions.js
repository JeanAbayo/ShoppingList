import { SUCCESS, ERROR, CLEAR, INFO, WARNING } from "./constants";

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

export const warning = data => {
	return {
		type: WARNING,
		data
	};
};

export const clear = () => {
	return {
		type: CLEAR
	};
};
