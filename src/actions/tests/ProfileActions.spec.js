import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../ProfileActions";
import { actionHelper } from "./actionHelpers";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test actions
describe("Profile actions", () => {
	it("Should notify loading profile", () => {
		const expectedAction = {
			type: types.LOAD_PROFILE
		};
		expect(actions.load_profile()).toEqual(expectedAction);
	});

	it("Should fetch profile", () => {
		const payload = actionHelper.user;
		const expectedAction = {
			type: types.GET_PROFILE,
			payload
		};
		expect(actions.get_profile(payload)).toEqual(expectedAction);
	});

	it("Should update profile", () => {
		const payload = actionHelper.user;
		const expectedAction = {
			type: types.UPDATE_PROFILE,
			payload
		};
		expect(actions.update_profile(payload)).toEqual(expectedAction);
	});

	it("Should finish loading", () => {
		const expectedAction = {
			type: types.REQUEST_FINISHED
		};
		expect(actions.loading_finished()).toEqual(expectedAction);
	});
	describe("shoppinglist items action creators", () => {
		beforeEach(function() {
			moxios.install();
		});

		afterEach(function() {
			moxios.uninstall();
		});

		it("should get user profile item", () => {
			const expectedActions = [{ type: "LOAD_PROFILE" }];

			const store = mockStore({ user: {} });

			return store.dispatch(actions.getUserProfile()).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions);
			});
		});

		it("should update user profile item", () => {
			const expectedActions = [{ type: "LOAD_PROFILE" }];

			const store = mockStore({ user: {} });

			return store
				.dispatch(actions.updateUserProfile(actionHelper.user))
				.then(() => {
					// return of async actions
					expect(store.getActions()).toEqual(expectedActions);
				});
		});
	});
});
