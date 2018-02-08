import { initialState } from "./initialState";

import {
  CREATE_SHOPPINGLIST,
  FETCH_SHOPPINGLIST,
  FETCH_MANY_SHOPPINGLISTS,
  UPDATE_SHOPPINGLIST,
  DELETE_SHOPPINGLIST,
  REQUEST_LOADING,
  REQUEST_FINISHED
} from "../actions/constants";

export default function ShoppinglistReducer(
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
        processed: true,
        payload: action.payload
      };
    case FETCH_SHOPPINGLIST:
      return {
        ...state,
        processed: true,
        payload: action.payload
      };
    case FETCH_MANY_SHOPPINGLISTS:
      return {
        ...state,
        processed: true,
        payload: action.payload
      };
    case UPDATE_SHOPPINGLIST:
      return {
        ...state,
        processed: true,
        payload: action.payload
      };
    case DELETE_SHOPPINGLIST:
      return {
        ...state,
        processed: true,
        payload: action.payload
      };
    case REQUEST_FINISHED:
      return {
        ...state,
        processing: false,
        processed: false
      };

    default:
      return state;
  }
}
