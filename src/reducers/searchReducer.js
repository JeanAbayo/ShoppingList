import { initialState } from "./initialState";
import { SEARCHING, DO_SEARCH } from "../actions/constants";

export default function SearchReducer(state = initialState.search, action) {
  switch (action.type) {
    case SEARCHING:
      return {
        ...state,
        searching: true,
        results: [],
        complete: false
      };

    case DO_SEARCH:
      return {
        ...state,
        searching: false,
        results: action.payload,
        complete: true
      };
    default:
      return state;
  }
}
