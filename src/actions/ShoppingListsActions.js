import {
	CREATE_SHOPPINGLIST,
	FETCH_SHOPPINGLIST,
	FETCH_MANY_SHOPPINGLISTS,
	UPDATE_SHOPPINGLIST,
	DELETE_SHOPPINGLIST,
	EMPTY_SHOPPINGLIST,
	REQUEST_LOADING,
	REQUEST_FINISHED
} from "./constants";

import { error as danger, success, clear } from "./NotifyActions";
import Api from "./Api";

export const create_shoppinglist = payload => {
	return {
		type: CREATE_SHOPPINGLIST,
		payload
	};
};

export const update_shoppinglist = payload => {
	return {
		type: UPDATE_SHOPPINGLIST,
		payload
	};
};

export const delete_shoppinglist = payload => {
	return {
		type: DELETE_SHOPPINGLIST,
		payload
	};
};

export const fetch_shoppinglist = payload => {
	return {
		type: FETCH_SHOPPINGLIST,
		payload
	};
};

export const fetch_many_shoppinglists = payload => {
	return {
		type: FETCH_MANY_SHOPPINGLISTS,
		shoppinglists: payload
	};
};

export const empty_shoppinglist = payload => {
	return {
		type: EMPTY_SHOPPINGLIST,
		payload
	};
};

export const request_loading = type => {
	return {
		type: REQUEST_LOADING,
		action: type
	};
};

export const request_finished = type => {
	return {
		type: REQUEST_FINISHED
	};
};

export function fetchShoppinglists(page, per_page) {
	return dispatch => {
		dispatch(request_loading("FETCH"));
		Api.shoppinglists("shoppinglists")
			.getAll({ page, per_page })
			.then(response => {
				console.log("Status", response);
				if (
					response.data.message ===
					"No shoppinglists found here, please add them."
				) {
					return dispatch(empty_shoppinglist(response.data));
				} else {
					dispatch(fetch_many_shoppinglists(response.data));
					return dispatch(request_finished());
				}
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					dispatch(request_finished());
					return dispatch(clear());
				}
			});
	};
}

export function createShoppinglist(shoppinglist) {
	return dispatch => {
		dispatch(request_loading("CREATE"));
		Api.shoppinglists("shoppinglists")
			.create(shoppinglist)
			.then(response => {
				dispatch(create_shoppinglist(response.data));
				dispatch(success(response.data));
				dispatch(request_finished());
				return dispatch(clear());
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					dispatch(request_finished());
					return dispatch(clear());
				}
			});
	};
}

export function editShoppinglist(shoppinglist_id) {
	return dispatch => {
		dispatch(request_loading("EDIT"));
		Api.shoppinglists("shoppinglists")
			.edit(shoppinglist_id)
			.then(response => {
				dispatch(update_shoppinglist(response.data));
				dispatch(success(response.data));
				dispatch(request_finished());
				return dispatch(clear());
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					dispatch(request_finished());
					return dispatch(clear());
				}
			});
	};
}

export function deleteShoppinglist(id) {
	return dispatch => {
		dispatch(request_loading("DELETE"));
		Api.shoppinglists("shoppinglists")
			.delete({ id })
			.then(response => {
				dispatch(delete_shoppinglist(response.data));
				dispatch(success(response.data));
				dispatch(clear());
				return dispatch(request_finished());
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					dispatch(clear());
					return dispatch(request_finished());
				}
			});
	};
}
