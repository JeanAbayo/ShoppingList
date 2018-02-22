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
	token: "token",
	item: {
		item_title: "Tomato",
		item_description: "Red ones"
	},
	user: {
		username: "John Doe",
		email: "johndoe@test.com"
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
