import { GET_PROFILE, UPDATE_PROFILE, LOAD_PROFILE } from "./constants";

import { error as danger, clear, success } from "./NotifyActions";
import Api from "./Api";

export const load_profile = () => {
	return {
		type: LOAD_PROFILE
	};
};

export const get_profile = payload => {
	return {
		type: GET_PROFILE,
		payload
	};
};

export const update_profile = payload => {
	return {
		type: UPDATE_PROFILE,
		payload
	};
};

export function getUserProfile() {
	return dispatch => {
		dispatch(load_profile());
		Api.profile("user")
			.getProfile()
			.then(response => {
				return dispatch(get_profile(response.data));
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					return dispatch(clear());
				}
			});
	};
}

export function updateUserProfile(data) {
	return dispatch => {
		dispatch(load_profile());
		Api.profile("user")
			.updateProfile({ data })
			.then(response => {
				dispatch(update_profile(response.data));
				dispatch(success(response.data));
				return dispatch(clear());
			})
			.catch(error => {
				if (error.response) {
					dispatch(danger(error.response.data));
					return dispatch(clear());
				}
			});
	};
}
