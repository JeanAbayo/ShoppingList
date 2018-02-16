import ItemsReducer from "../itemsReducer";
import * as actions from "../../actions/constants";
import expect from "expect";
import Mock from "./mocks";

describe("item reducer", () => {
	it("should return the initial state", () => {
		expect(ItemsReducer(undefined, {})).toEqual(
			Mock.items().initialState()
		);
	});

	it("should handle REQUEST LOADING", () => {
		const startAction = {
			type: actions.REQUEST_LOADING
		};
		expect(ItemsReducer({}, startAction)).toEqual({
			loaded: false,
			loading: true
		});
	});

	it("should handle UPDATE ITEM", () => {
		const updateAction = {
			type: actions.UPDATE_ITEM,
			payload: Mock.items().data()
		};
		expect(ItemsReducer({}, updateAction)).toEqual({
			loaded: true,
			loading: false,
			payload: Mock.items().data()
		});
	});

	it("should handle DELETE ITEM", () => {
		const deleteAction = {
			type: actions.DELETE_ITEM,
			payload: Mock.items().data()
		};
		expect(ItemsReducer({}, deleteAction)).toEqual({
			loaded: true,
			loading: false,
			payload: Mock.items().data()
		});
	});

	it("should handle EMPTY ITEMS", () => {
		const emptyAction = {
			type: actions.EMPTY_ITEMS,
			payload: { message: "No items" }
		};
		expect(ItemsReducer({}, emptyAction)).toEqual({
			empty: true,
			items: [],
			loaded: false,
			loading: false,
			payload: { message: "No items" }
		});
	});

	it("should handle FETCH MANY ITEMS", () => {
		const fetchAllAction = {
			type: actions.FETCH_MANY_ITEMS,
			items: { title: "Carrots" }
		};
		expect(ItemsReducer({}, fetchAllAction)).toEqual({
			empty: false,
			items: { title: "Carrots" },
			loading: false
		});
	});
	it("should handle REQUEST FINISHED", () => {
		const requestDone = {
			type: actions.REQUEST_FINISHED
		};
		expect(ItemsReducer({}, requestDone)).toEqual({
			empty: false,
			loaded: false,
			loading: false
		});
	});
});
