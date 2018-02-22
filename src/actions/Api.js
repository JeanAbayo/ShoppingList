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
			getOne: ({ id }) =>
				axios.get(`${base_url}/${url}/${id.toString()}`),
			getAll: ({ page, per_page }) =>
				axios.get(`${base_url}/${url}`, {
					params: { page, per_page }
				}),
			update: ({ shoppinglist }) =>
				axios.put(
					`${base_url}/${url}/${shoppinglist.id.toString()}`,
					shoppinglist.data
				),
			create: toCreate => axios.post(`${base_url}/${url}`, toCreate),
			delete: ({ id }) =>
				axios.delete(`${base_url}/${url}/${id.toString()}`),
			createItem: ({ item }) =>
				axios.post(
					`${base_url}/${url}/${item.id.toString()}/items`,
					item.data
				),
			updateItem: ({ item }) =>
				axios.put(
					`${base_url}/${url}/${item.shoppinglist.toString()}/items/${item.item.toString()}`,
					item.data
				),
			deleteItem: ({ data }) =>
				axios.delete(
					`${base_url}/${url}/${data.shoppinglist.toString()}/items/${data.item.toString()}`
				),
			getAllItems: ({ id, page, per_page }) =>
				axios.get(`${base_url}/${url}/${id.toString()}/items`, {
					params: { page, per_page }
				}),
			search: ({ q }) =>
				axios.get(`${base_url}/${url}`, { params: { q } }),
			searchItems: ({ q, id }) =>
				axios.get(`${base_url}/${url}/${id.toString()}`, {
					params: { q }
				})
		};
	},
	profile(url) {
		return {
			getProfile: () => axios.get(`${base_url}/${url}`),
			updateProfile: ({ data }) => axios.put(`${base_url}/${url}`, data)
		};
	},
	logout(url) {
		return {
			Logout: () => axios.post(`${base_url}/${url}`)
		};
	}
};
