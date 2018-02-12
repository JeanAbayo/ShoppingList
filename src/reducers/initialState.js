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
		processed: false,
		shoppinglists: [],
		payload: [],
		empty: false
	},
	items: {
		processing: false,
		processed: false,
		payload: [],
		items: [],
		empty: false
	}
};
