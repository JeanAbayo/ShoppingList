import NotifyReducer from "../notifyReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import Mock from "./mocks";

describe("Notify reducer", () => {
	it("should return the initial state", () => {
		expect(NotifyReducer(undefined, {})).toEqual({});
	});

	it("should handle SUCCESS", () => {
		const successAction = {
			type: actions.SUCCESS,
			data: { message: "Login successfuly" }
		};
		expect(NotifyReducer({}, successAction)).toEqual({
			data: { message: "Login successfuly" },
			type: "SUCCESS"
		});
	});

	it("should handle ERROR", () => {
		const errorAction = {
			type: actions.ERROR,
			data: { message: "Invalid credentials" }
		};
		expect(NotifyReducer({}, errorAction)).toEqual({
			data: { message: "Invalid credentials" },
			type: "ERROR"
		});
	});

	it("should handle INFO", () => {
		const infoAction = {
			type: actions.INFO,
			data: { message: "We need your password" }
		};
		expect(NotifyReducer({}, infoAction)).toEqual({
			data: { message: "We need your password" },
			type: "INFO"
		});
	});

	it("should handle WARNING", () => {
		const warningAction = {
			type: actions.WARNING,
			data: { message: "Logged out" }
		};
		expect(NotifyReducer({}, warningAction)).toEqual({
			data: { message: "Logged out" },
			type: "WARNING"
		});
	});

	it("should handle CLEAR", () => {
		const clearAction = {
			data: null,
			type: "CLEAR"
		};
		expect(NotifyReducer({}, clearAction)).toEqual({ data: null });
	});
});
