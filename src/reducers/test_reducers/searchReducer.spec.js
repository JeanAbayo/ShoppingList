import SearchReducer from "../searchReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import Mock from "./mocks";

describe("Search reducer", () => {
	it("should return the initial state", () => {
		expect(SearchReducer(undefined, {})).toEqual({
			complete: false,
			results: [],
			searching: false
		});
	});

	it("should handle SEARCHING", () => {
		const searchingAction = {
			type: actions.SEARCHING
		};
		expect(SearchReducer({}, searchingAction)).toEqual({
			complete: false,
			results: [],
			searching: true
		});
	});

	it("should handle DO_SEARCH", () => {
		const searchAction = {
			type: actions.DO_SEARCH,
			payload: Mock.search().data()
		};
		expect(SearchReducer({}, searchAction)).toEqual({
			complete: true,
			results: Mock.search().data(),
			searching: false
		});
	});
});
