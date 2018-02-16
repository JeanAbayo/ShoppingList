export const actionHelper = {
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
		title: "Vegetables",
		description: "Cassava"
	},
	item: {
		item_title: "Tomato",
		item_description: "Red ones"
	},
	search: {
		searching: false,
		results: [],
		complete: false
	},
	profile: {
		loading_info: false,
		payload: [],
		user: [],
		loaded: false
	}
};
