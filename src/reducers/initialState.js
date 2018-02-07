export const initialState = {
	register: {
		registering: false,
		registered: false,
		error: false,
		payload: []
	},
	login: {
		logging_in: false,
		error: false,
		payload: [],
		isAuthenticated: false
	},
	notify: {},
	shoppinglist: {
		processing: false,
		created: false,
		payload: []
	}
};
