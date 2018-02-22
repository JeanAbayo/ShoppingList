import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../ItemsActions";
import { actionHelper } from "./actionHelpers";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test actions
describe("Shoppinglist item actions", () => {
	it("Should create an action to update an item", () => {
		const payload = actionHelper.item;
		const expectedAction = {
			type: types.UPDATE_ITEM,
			payload
		};
		expect(actions.update_item(payload)).toEqual(expectedAction);
	});

	it("Should create an action to delete an item", () => {
		const payload = actionHelper.item;
		const expectedAction = {
			type: types.DELETE_ITEM,
			payload
		};
		expect(actions.delete_item(payload)).toEqual(expectedAction);
	});

	it("Should create an action to get many items", () => {
		const payload = actionHelper.item;
		const expectedAction = {
			type: types.FETCH_MANY_ITEMS,
			items: payload
		};
		expect(actions.get_all_items(payload)).toEqual(expectedAction);
	});

	it("Should create an action for request loading", () => {
		const expectedAction = {
			type: types.REQUEST_LOADING
		};
		expect(actions.request_loading()).toEqual(expectedAction);
	});

	it("Should create an action to get all items", () => {
		const expectedAction = {
			type: types.REQUEST_FINISHED
		};
		expect(actions.request_finished()).toEqual(expectedAction);
	});

	it("Should create an action to check emptyness", () => {
		const payload = { message: "Shoppinglist empty" };
		const expectedAction = {
			type: types.EMPTY_ITEMS,
			payload
		};
		expect(actions.empty_shoppinglist(payload)).toEqual(expectedAction);
	});

	describe("shoppinglist items action creators", () => {
		beforeEach(function() {
			moxios.install();
		});

		afterEach(function() {
			moxios.uninstall();
		});

		it("should delete item", () => {
			const expectedActions = [
				{ action: "DELETE", type: "REQUEST_LOADING" }
			];

			const store = mockStore({ shoppinglist: {} });
			const data = { shoppinglist: "1", item: "1" };

			return store.dispatch(actions.deleteItem(data)).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
		it("should update item", () => {
			const expectedActions = [
				{ action: "UPDATE", type: "REQUEST_LOADING" }
			];

			const store = mockStore({ shoppinglist: {} });
			const data = { shoppinglist: "1", item: "1" };

			return store.dispatch(actions.updateItem(data)).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
		});

		it("should update item", () => {
			const expectedActions = [
				{ action: "GET_ALL_ITEMS", type: "REQUEST_LOADING" }
			];

			const store = mockStore({ shoppinglist: {} });
			const data = { shoppinglist: "1", item: "1" };

			return store.dispatch(actions.fetchAllItems(data)).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});
