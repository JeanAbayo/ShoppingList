import { initialState } from "./initialState";

import {
  CREATE_SHOPPINGLIST,
  FETCH_SHOPPINGLIST,
  FETCH_MANY_SHOPPINGLISTS,
  UPDATE_SHOPPINGLIST,
  DELETE_SHOPPINGLIST,
  REQUEST_LOADING
} from "../actions/constants";

export default function registerReducer(
  state = initialState.shoppinglist,
  action
) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        processing: true
      };
    case CREATE_SHOPPINGLIST:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload
      };
    case FETCH_SHOPPINGLIST:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload
      };
    case FETCH_MANY_SHOPPINGLISTS:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload
      };
    case UPDATE_SHOPPINGLIST:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload
      };
    case DELETE_SHOPPINGLIST:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload
      };

    default:
      return state;
  }
}
