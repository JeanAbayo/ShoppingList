import ShoppinglistReducer from "../shoppinglistReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import { reducerHelper } from "./reducerHelpers";

describe("shoppinglist reducer", () => {
	it("should return the initial state", () => {
		expect(ShoppinglistReducer(undefined, {})).toEqual(
			reducerHelper.shoppinglist.initialState
		);
	});

	it("should handle REQUEST LOADING", () => {
		const startAction = {
			type: actions.REQUEST_LOADING
		};
		expect(ShoppinglistReducer({}, startAction)).toEqual({
			processing: true
		});
	});

	it("should handle CREATE SHOPPINGLIST", () => {
		const createAction = {
			type: actions.CREATE_SHOPPINGLIST,
			payload: reducerHelper.shoppinglist.data
		};
		expect(ShoppinglistReducer({}, createAction)).toEqual({
			processed: true,
			processing: false,
			payload: reducerHelper.shoppinglist.data
		});
	});

	it("should handle UPDATE SHOPPINGLIST", () => {
		const updateAction = {
			type: actions.UPDATE_SHOPPINGLIST,
			payload: reducerHelper.shoppinglist.data
		};
		expect(ShoppinglistReducer({}, updateAction)).toEqual({
			processed: true,
			processing: false,
			payload: reducerHelper.shoppinglist.data
		});
	});

	it("should handle DELETE SHOPPINGLIST", () => {
		const deleteAction = {
			type: actions.DELETE_SHOPPINGLIST,
			payload: reducerHelper.shoppinglist.data
		};
		expect(ShoppinglistReducer({}, deleteAction)).toEqual({
			processed: true,
			processing: false,
			payload: reducerHelper.shoppinglist.data
		});
	});

	it("should handle EMPTY SHOPPINGLIST", () => {
		const emptyAction = {
			type: actions.EMPTY_SHOPPINGLIST,
			payload: { message: "No Shoppinglists" }
		};
		expect(ShoppinglistReducer({}, emptyAction)).toEqual({
			empty: true,
			payload: { message: "No Shoppinglists" },
			processed: false,
			processing: false
		});
	});

	it("should handle FETCH SHOPPINGLIST", () => {
		const fetchAllAction = {
			type: actions.FETCH_SHOPPINGLIST,
			payload: reducerHelper.shoppinglist.data
		};
		expect(ShoppinglistReducer({}, fetchAllAction)).toEqual({
			processing: false,
			processed: true,
			shoppinglist: reducerHelper.shoppinglist.data
		});
	});

	it("should handle FETCH MANY SHOPPINGLISTS", () => {
		const fetchAllAction = {
			type: actions.FETCH_MANY_SHOPPINGLISTS,
			shoppinglists: { title: "Carrots" }
		};
		expect(ShoppinglistReducer({}, fetchAllAction)).toEqual({
			processing: false,
			shoppinglists: { title: "Carrots" }
		});
	});

	it("should handle CREATE ITEM", () => {
		const createItem = {
			type: actions.CREATE_ITEM,
			payload: reducerHelper.items.data
		};
		expect(ShoppinglistReducer({}, createItem)).toEqual({
			processed: true,
			processing: false,
			payload: reducerHelper.items.data
		});
	});

	it("should handle REQUEST FINISHED", () => {
		const requestDone = {
			type: actions.REQUEST_FINISHED
		};
		expect(ShoppinglistReducer({}, requestDone)).toEqual({
			empty: false,
			processed: false,
			processing: false
		});
	});
});
