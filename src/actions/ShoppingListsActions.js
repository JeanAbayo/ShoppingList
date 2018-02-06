import axios from "axios";

import { url } from "../instance/config";
import {
	CREATE_SHOPPINGLIST,
	FETCH_SHOPPINGLIST,
	FETCH_MANY_SHOPPINGLISTS,
	UPDATE_SHOPPINGLIST,
	DELETE_SHOPPINGLIST,
	REQUEST_LOADING
} from "./constants";

import { error as danger, success } from "./NotifyActions";
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
		payload
	};
};

export const request_loading = type => {
	return {
		type: REQUEST_LOADING,
		action: type
	};
};

export function createShoppinglist(shoppinglist) {
	return dispatch => {
		dispatch(request_loading("CREATE"));
		Api.shoppinglists("shoppinglists")
			.getAll()
			.then(({ payload }) => console.log(payload))
			.catch(({ err }) => console.log(err));
	};
}
