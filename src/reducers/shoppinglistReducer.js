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
    case REQUEST_FINISHED:
      return {
        ...state,
        processing: false
      };
    case CREATE_SHOPPINGLIST:
      return {
        ...state,
        created: true,
        payload: action.payload
      };
    case FETCH_SHOPPINGLIST:
      return {
        ...state,
        created: true,
        payload: action.payload
      };
    case FETCH_MANY_SHOPPINGLISTS:
      return {
        ...state,
        created: true,
        payload: action.payload
      };
    case UPDATE_SHOPPINGLIST:
      return {
        ...state,
        created: true,
        payload: action.payload
      };
    case DELETE_SHOPPINGLIST:
      return {
        ...state,
        created: true,
        payload: action.payload
      };

    default:
      return state;
  }
}
