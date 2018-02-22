import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../SearchActions";
import { actionHelper } from "./actionHelpers";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test actions
describe("Profile actions", () => {
	it("Should do loading", () => {
		const expectedAction = {
			type: types.SEARCHING
		};
		expect(actions.searching()).toEqual(expectedAction);
	});

	it("Should do search", () => {
		const payload = actionHelper.user;
		const expectedAction = {
			type: types.DO_SEARCH,
			payload
		};
		expect(actions.do_search(payload)).toEqual(expectedAction);
	});
	describe("search action creators", () => {
		beforeEach(function() {
			moxios.install();
		});

		afterEach(function() {
			moxios.uninstall();
		});

		it("should search shoppinglists", () => {
			const expectedActions = [{ type: "SEARCHING" }];

			const store = mockStore({ user: {} });

			return store.dispatch(actions.search("a", "item")).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
		});

		it("should search items", () => {
			const expectedActions = [{ type: "SEARCHING" }];

			const store = mockStore({ user: {} });

			return store.dispatch(actions.searchItem("a", 1)).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});
