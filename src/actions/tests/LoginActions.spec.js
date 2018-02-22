import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../LoginActions";
import { actionHelper } from "./actionHelpers";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test actions
describe("Login actions", () => {
	it("Should create an action to logingIn", () => {
		const expectedAction = {
			type: types.LOGING_IN
		};
		expect(actions.logingIn()).toEqual(expectedAction);
	});

	it("Should create an action to success login ", () => {
		const payload = actionHelper.token;
		const expectedAction = {
			type: types.LOGIN_SUCCEEDS,
			payload
		};
		expect(actions.loginSucceeds(actionHelper.token)).toEqual(
			expectedAction
		);
	});

	it("Should create an action to success login ", () => {
		const payload = actionHelper.token;
		const expectedAction = {
			type: types.LOGOUT,
			payload
		};
		expect(actions.logged_out(actionHelper.token)).toEqual(expectedAction);
	});

	describe("Login action creators", () => {
		beforeEach(function() {
			moxios.install();
		});

		afterEach(function() {
			moxios.uninstall();
		});

		it("should login", () => {
			const expectedActions = [{ type: "LOGING_IN" }];

			const store = mockStore({ shoppinglist: {} });

			return store.dispatch(actions.login(actionHelper.user)).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});
