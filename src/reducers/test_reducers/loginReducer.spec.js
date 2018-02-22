import LoginReducer from "../loginReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import { reducerHelper } from "./reducerHelpers";

describe("login reducer", () => {
	it("should return the initial state", () => {
		expect(LoginReducer(undefined, {})).toEqual(
			reducerHelper.login.initialState
		);
	});

	it("should handle LOGGING IN", () => {
		const loggingAction = {
			type: actions.LOGING_IN
		};
		expect(LoginReducer({}, loggingAction)).toEqual({
			logging_in: true
		});
	});

	it("should handle LOGIN SUCCESSFUL", () => {
		const successAction = {
			type: actions.LOGIN_SUCCEEDS,
			payload: reducerHelper.login.data
		};
		expect(LoginReducer({}, successAction)).toEqual({
			logging_in: true,
			error: false,
			isAuthenticated: true,
			logging_in: false,
			payload: reducerHelper.login.data
		});
	});

	it("should handle LOGIN FAILS", () => {
		const failAction = {
			type: actions.LOGIN_FAILS,
			payload: { message: "Invalid credentials" }
		};
		expect(LoginReducer({}, failAction)).toEqual({
			error: true,
			logging_in: false,
			payload: { message: "Invalid credentials" }
		});
	});

	it("should handle LOGOUT", () => {
		const logoutAction = {
			type: actions.LOGOUT
		};
		expect(LoginReducer({}, logoutAction)).toEqual({
			isAuthenticated: false
		});
	});
});
