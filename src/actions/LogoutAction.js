import { LOGOUT } from "./constants";

export const logout = () => {
	localStorage.removeItem("token");
	return {
		type: LOGOUT
	};
};
