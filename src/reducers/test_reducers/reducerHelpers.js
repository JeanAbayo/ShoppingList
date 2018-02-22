export const reducerHelper = {
	items: {
		initialState: {
			empty: false,
			items: [],
			loaded: false,
			loading: false,
			payload: []
		},
		data: {
			item_title: "Vagetables",
			item_description: "Carrots"
		}
	},

	shoppinglist: {
		initialState: {
			empty: false,
			payload: [],
			processed: false,
			processing: false,
			shoppinglists: []
		},
		data: {
			title: "Shoes",
			description: "Jordans"
		}
	},
	login: {
		initialState: {
			error: false,
			isAuthenticated: false,
			logging_in: false,
			payload: []
		},
		data: {
			email: "johndoe@test.com",
			password: "secret"
		}
	},
	register: {
		initialState: {
			error: false,
			payload: [],
			registered: false,
			registering: false
		},
		data: {
			username: "John Doe",
			email: "johndoe@test.com",
			password: "secret"
		}
	},
	profile: {
		initialState: {
			loaded: false,
			loading_info: false,
			payload: [],
			user: []
		},
		data: {
			username: "John Doe",
			email: "johndoe@test.com"
		}
	},
	notify: {
		initialState: {
			loaded: false,
			loading_info: false,
			payload: [],
			user: []
		},
		data: {
			username: "John Doe",
			email: "johndoe@test.com"
		}
	},
	search: {
		initialState: {
			complete: false,
			results: [],
			searching: false
		},
		data: {
			title: "Carrots",
			description: "Potatoes"
		}
	}
};
