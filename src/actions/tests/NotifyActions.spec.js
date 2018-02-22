import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../NotifyActions";
import { actionHelper } from "./actionHelpers";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test actions
describe("Notify actions", () => {
	it("Should notify success", () => {
		const data = "Success";
		const expectedAction = {
			type: types.SUCCESS,
			data
		};
		expect(actions.success(data)).toEqual(expectedAction);
	});

	it("Should notify error", () => {
		const data = "Error";
		const expectedAction = {
			type: types.ERROR,
			data
		};
		expect(actions.error(data)).toEqual(expectedAction);
	});

	it("Should notify info", () => {
		const data = "Info";
		const expectedAction = {
			type: types.INFO,
			data
		};
		expect(actions.info(data)).toEqual(expectedAction);
	});

	it("Should notify warning", () => {
		const data = "Warning";
		const expectedAction = {
			type: types.WARNING,
			data
		};
		expect(actions.warning(data)).toEqual(expectedAction);
	});

	it("Should notify clear", () => {
		const expectedAction = {
			type: types.CLEAR
		};
		expect(actions.clear()).toEqual(expectedAction);
	});
});
