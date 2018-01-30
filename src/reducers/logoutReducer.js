import { LOGOUT } from "../actions/constants";

const initialState = {
	logout: false
};

export default function logoutReducer(state = initialState, action) {
	switch (action.type) {
		case LOGOUT:
			return {
				...state,
				logout: true
			};
		default:
			return state;
	}
}
