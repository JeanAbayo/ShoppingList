export default {
	items() {
		return {
			initialState: () => ({
				empty: false,
				items: [],
				loaded: false,
				loading: false,
				payload: []
			}),
			data: () => ({
				item_title: "Vagetables",
				item_description: "Carrots"
			})
		};
	},
	shoppinglist() {
		return {
			initialState: () => ({
				empty: false,
				payload: [],
				processed: false,
				processing: false,
				shoppinglists: []
			}),
			data: () => ({
				title: "Shoes",
				description: "Jordans"
			})
		};
	},
	login() {
		return {
			initialState: () => ({
				error: false,
				isAuthenticated: false,
				logging_in: false,
				payload: []
			}),
			data: () => ({
				email: "johndoe@test.com",
				password: "secret"
			})
		};
	},
	register() {
		return {
			initialState: () => ({
				error: false,
				payload: [],
				registered: false,
				registering: false
			}),
			data: () => ({
				username: "John Doe",
				email: "johndoe@test.com",
				password: "secret"
			})
		};
	},
	profile() {
		return {
			initialState: () => ({
				loaded: false,
				loading_info: false,
				payload: [],
				user: []
			}),
			data: () => ({
				username: "John Doe",
				email: "johndoe@test.com"
			})
		};
	}
};
