import ProfileReducer from "../profileReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import Mock from "./mocks";

describe("Profile reducer", () => {
	it("should return the initial state", () => {
		expect(ProfileReducer(undefined, {})).toEqual(
			Mock.profile().initialState()
		);
	});

	it("should handle PROFILE LOADING", () => {
		const loadingAction = {
			type: actions.LOAD_PROFILE
		};
		expect(ProfileReducer({}, loadingAction)).toEqual({
			loaded: false,
			loading_info: true,
			payload: []
		});
	});

	it("should handle FETCH PROFILE", () => {
		const getProfileAction = {
			type: actions.GET_PROFILE,
			payload: Mock.profile().data()
		};
		expect(ProfileReducer({}, getProfileAction)).toEqual({
			loaded: true,
			loading_info: false,
			user: Mock.profile().data()
		});
	});

	it("should handle UPDATE PROFILE", () => {
		const updateAction = {
			type: actions.UPDATE_PROFILE,
			payload: Mock.profile().data()
		};
		expect(ProfileReducer({}, updateAction)).toEqual({
			loaded: true,
			loading_info: false,
			user: Mock.profile().data()
		});
	});

	it("should handle ERROR OCURRED", () => {
		const errorAction = {
			type: actions.ERROR,
			payload: { message: "Email taken" }
		};
		expect(ProfileReducer({}, errorAction)).toEqual({
			loading_info: false,
			payload: { message: "Email taken" }
		});
	});

	it("should handle REQUEST FINISHED", () => {
		const finishedAction = {
			type: actions.REQUEST_FINISHED
		};
		expect(ProfileReducer({}, finishedAction)).toEqual({
			loaded: false,
			loading_info: false,
			payload: []
		});
	});
});
