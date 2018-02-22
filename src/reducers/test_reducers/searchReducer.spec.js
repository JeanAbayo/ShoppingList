import SearchReducer from "../searchReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import { reducerHelper } from "./reducerHelpers";

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
			payload: reducerHelper.search.data
		};
		expect(SearchReducer({}, searchAction)).toEqual({
			complete: true,
			results: reducerHelper.search.data,
			searching: false
		});
	});
});
