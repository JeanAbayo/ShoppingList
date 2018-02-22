import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../RegisterActions";
import { actionHelper } from "./actionHelpers";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test actions
describe("Register actions", () => {
	it("Should show registering", () => {
		const expectedAction = {
			type: types.REGISTERING
		};
		expect(actions.registering()).toEqual(expectedAction);
	});

	it("Should register succeed", () => {
		const data = actionHelper.user;
		const expectedAction = {
			type: types.REGISTER_SUCCEEDS,
			payload: {
				message: data
			}
		};
		expect(actions.registerSucceeds(data)).toEqual(expectedAction);
	});

	it("Should register fail", () => {
		const data = actionHelper.user;
		const expectedAction = {
			type: types.REGISTER_FAILS,
			payload: {
				message: data
			}
		};
		expect(actions.registerFails(data)).toEqual(expectedAction);
	});

	it("Should finish register", () => {
		const expectedAction = {
			type: types.REGISTER_DONE
		};
		expect(actions.registerDone()).toEqual(expectedAction);
	});
});
