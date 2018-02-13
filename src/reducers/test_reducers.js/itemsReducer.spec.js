import { Reducer } from "redux-testkit";
import _ from "lodash";

import ItemsReducer from "../itemsReducer";
import * as types from "../../actions/constants";

describe("Tests for the Items reducer", () => {
  const { items, gettingItems, deletingItems } = ItemsReducer;

  it("return an empty object", () => {
    expect(items()).toEqual({});
  });
});
