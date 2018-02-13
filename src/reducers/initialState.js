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
		loading: false,
		loaded: false,
		payload: [],
		items: [],
		empty: false
	},
	search: {
		searching: false,
		results: [],
		complete: false
	}
};
