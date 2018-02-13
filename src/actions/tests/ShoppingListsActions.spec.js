import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as actions from "../ShoppingListsActions";
import * as types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
	it("Should create an action to create a list", () => {
		const payload = "Finish docs";
		const expectedAction = {
			type: types.CREATE_SHOPPINGLIST,
			payload
		};
		expect(actions.create_shoppinglist(payload)).toEqual(expectedAction);
	});
});
