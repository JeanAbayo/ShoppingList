import {
	UPDATE_ITEM,
	DELETE_ITEM,
	FETCH_MANY_ITEMS,
	EMPTY_ITEMS,
	REQUEST_LOADING,
	REQUEST_FINISHED
} from "./constants";

import { getShoppinglist } from "./ShoppingListsActions";

import { error as danger, success, clear } from "./NotifyActions";
import Api from "./Api";

export const update_item = payload => {
	return {
		type: UPDATE_ITEM,
		payload
	};
};

export const delete_item = payload => {
	return {
		type: DELETE_ITEM,
		payload
	};
};

export const get_all_items = payload => {
	return {
		type: FETCH_MANY_ITEMS,
		items: payload
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

export const empty_shoppinglist = payload => {
	return {
		type: EMPTY_ITEMS,
		payload
	};
};

export function deleteItem(id) {
	return dispatch => {
		dispatch(request_loading("DELETE"));
		Api.shoppinglists("shoppinglists")
			.delete({ id })
			.then(response => {
				dispatch(delete_item(response.data));
				dispatch(request_finished());
				dispatch(success(response.data));
				return dispatch(clear());
			})
			.catch(error => {
				if (error.response) {
					dispatch(request_finished());
					dispatch(danger(error.response.data));
					return dispatch(clear());
				}
			});
	};
}

export function updateItem(item) {
	return dispatch => {
		dispatch(request_loading("DELETE"));
		Api.shoppinglists("shoppinglists")
			.createItem({ item })
			.then(response => {
				dispatch(update_item(response.data));
				dispatch(request_finished());
				dispatch(success(response.data));
				return dispatch(clear());
			})
			.catch(error => {
				if (error.response) {
					dispatch(request_finished());
					dispatch(danger(error.response.data));
					return dispatch(clear());
				}
			});
	};
}

export function fetchAllItems(id) {
	return dispatch => {
		dispatch(request_loading("GET_ALL_ITEMS"));
		Api.shoppinglists("shoppinglists")
			.getAllItems({ id })
			.then(response => {
				dispatch(getShoppinglist(id));
				dispatch(get_all_items(response.data));
				return dispatch(request_finished());
			})
			.catch(error => {
				if (error.response) {
					if (error.response.status === 400) {
						return dispatch(empty_shoppinglist(error.data));
					}
					dispatch(request_finished());
					dispatch(danger(error.response.data));
					return dispatch(clear());
				}
			});
	};
}
