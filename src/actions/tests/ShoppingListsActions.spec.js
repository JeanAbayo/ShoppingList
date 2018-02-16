import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../ShoppingListsActions";
import { actionHelper } from "./actionHelpers";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("shoppinglist Actions", () => {
	it("Should create an action to create a list", () => {
		const payload = actionHelper.shoppinglist;
		const expectedAction = {
			type: types.CREATE_SHOPPINGLIST,
			payload
		};
		expect(actions.create_shoppinglist(payload)).toEqual(expectedAction);
	});
	it("Should create an action to update a list", () => {
		const payload = actionHelper.shoppinglist;
		const expectedAction = {
			type: types.UPDATE_SHOPPINGLIST,
			payload
		};
		expect(actions.update_shoppinglist(payload)).toEqual(expectedAction);
	});
	it("Should create an action to delete a list", () => {
		const payload = { message: "Deleted successfuly" };
		const expectedAction = {
			type: types.DELETE_SHOPPINGLIST,
			payload
		};
		expect(actions.delete_shoppinglist(payload)).toEqual(expectedAction);
	});
	it("Should create an action to fetch a list", () => {
		const payload = actionHelper.shoppinglist;
		const expectedAction = {
			type: types.FETCH_SHOPPINGLIST,
			payload
		};
		expect(actions.fetch_shoppinglist(payload)).toEqual(expectedAction);
	});
	it("Should create an action to fetch many lists", () => {
		const payload = actionHelper.shoppinglist;
		const expectedAction = {
			type: types.FETCH_MANY_SHOPPINGLISTS,
			shoppinglists: payload
		};
		expect(actions.fetch_many_shoppinglists(payload)).toEqual(
			expectedAction
		);
	});
	it("Should create an action to check empty lists", () => {
		const payload = [];
		const expectedAction = {
			type: types.EMPTY_SHOPPINGLIST,
			payload
		};
		expect(actions.empty_shoppinglist(payload)).toEqual(expectedAction);
	});
	it("Should create an action to create an item on lists", () => {
		const payload = actionHelper.item;
		const expectedAction = {
			type: types.CREATE_ITEM,
			payload
		};
		expect(actions.create_item(payload)).toEqual(expectedAction);
	});
	it("Should create an action to finish request", () => {
		const expectedAction = {
			type: types.REQUEST_FINISHED
		};
		expect(actions.request_finished()).toEqual(expectedAction);
	});
	it("Should create an action to load request", () => {
		const expectedAction = {
			type: types.REQUEST_LOADING
		};
		expect(actions.request_loading()).toEqual(expectedAction);
	});
});

describe("shoppinglist action creators", () => {
	beforeEach(function() {
		moxios.install();
	});

	afterEach(function() {
		moxios.uninstall();
	});

	it("should fetch shoppinglists successfuly", () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: actionHelper.shoppinglist
			});
		});

		const expectedActions = [
			{ type: types.REQUEST_LOADING, action: "FETCH" }
		];

		const store = mockStore({ shoppinglists: {} });

		return store.dispatch(actions.fetchShoppinglists(1, 5)).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
