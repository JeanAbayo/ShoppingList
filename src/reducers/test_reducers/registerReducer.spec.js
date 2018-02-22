import registerReducer from "../registerReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import { reducerHelper } from "./reducerHelpers";

describe("register reducer", () => {
	it("should return the initial state", () => {
		expect(registerReducer(undefined, {})).toEqual(
			reducerHelper.register.initialState
		);
	});

	it("should handle REGISTERING", () => {
		const loggingAction = {
			type: actions.REGISTERING
		};
		expect(registerReducer({}, loggingAction)).toEqual({
			registering: true
		});
	});

	it("should handle REGISTRATION SUCCEEDS", () => {
		const successAction = {
			type: actions.REGISTER_SUCCEEDS,
			payload: reducerHelper.register.data
		};
		expect(registerReducer({}, successAction)).toEqual({
			error: false,
			payload: reducerHelper.register.data,
			registered: true,
			registering: false
		});
	});

	it("should handle REGISTRATION FAILS", () => {
		const failAction = {
			type: actions.REGISTER_FAILS,
			payload: { message: "Email already taken" }
		};
		expect(registerReducer({}, failAction)).toEqual({
			error: true,
			payload: { message: "Email already taken" },
			registering: false
		});
	});

	it("should handle REGISTRATION DONE", () => {
		const finishedAction = {
			type: actions.REGISTER_DONE
		};
		expect(registerReducer({}, finishedAction)).toEqual({
			error: false,
			registered: false,
			registering: false
		});
	});
});
