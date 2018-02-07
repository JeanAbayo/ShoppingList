import axios from "axios";

import { url as base_url } from "../instance/config";

axios.interceptors.request.use(
	config => {
		const token = localStorage.getItem("token");
		if (token != null) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function(err) {
		return Promise.reject(err);
	}
);

export default {
	shoppinglists(url) {
		return {
			getOne: ({ id }) => axios.get(`${url}/${id}`),
			getAll: () => axios.get(url),
			update: toUpdate => axios.put(url, toUpdate),
			create: toCreate => axios.post(`${base_url}/${url}`, toCreate),
			delete: ({ id }) => axios.delete(`${url}/${id}`)
		};
	},
	logout(url) {
		return {
			Logout: () => axios.post(`${base_url}/${url}`)
		};
	}
};
