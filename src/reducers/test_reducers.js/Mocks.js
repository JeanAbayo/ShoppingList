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
	}
};
