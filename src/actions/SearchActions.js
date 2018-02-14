import { SEARCHING, DO_SEARCH } from "./constants";

import { error as danger, clear } from "./NotifyActions";
import Api from "./Api";

export const searching = () => {
	return {
		type: SEARCHING
	};
};

export const do_search = payload => {
	return {
		type: DO_SEARCH,
		payload
	};
};

export function search(q, type) {
	return dispatch => {
		dispatch(searching());
		Api.shoppinglists("search")
			.search({ q })
			.then(response => {
				return dispatch(do_search(response.data));
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					return dispatch(clear());
				}
			});
	};
}
