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
			getOne: ({ id }) => axios.get(`${base_url}/${url}/${id}`),
			getAll: () => axios.get(`${base_url}/${url}`),
			update: toUpdate => axios.put(`${base_url}/${url}`, toUpdate),
			create: toCreate => axios.post(`${base_url}/${url}`, toCreate),
			delete: ({ id }) => axios.delete(`${base_url}/${url}/${id}`)
		};
	},
	logout(url) {
		return {
			Logout: () => axios.post(`${base_url}/${url}`)
		};
	}
};
