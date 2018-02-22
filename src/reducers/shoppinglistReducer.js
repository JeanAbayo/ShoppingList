import { initialState } from "./initialState";

import {
  CREATE_SHOPPINGLIST,
  FETCH_SHOPPINGLIST,
  FETCH_MANY_SHOPPINGLISTS,
  UPDATE_SHOPPINGLIST,
  DELETE_SHOPPINGLIST,
  EMPTY_SHOPPINGLIST,
  CREATE_ITEM,
  REQUEST_LOADING,
  REQUEST_FINISHED,
  CLEAR
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
        processing: false,
        processed: true,
        payload: action.payload
      };

    case FETCH_SHOPPINGLIST:
      return {
        ...state,
        processing: false,
        processed: true,
        shoppinglist: action.payload
      };

    case FETCH_MANY_SHOPPINGLISTS:
      return {
        ...state,
        processing: false,
        shoppinglists: action.shoppinglists
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

    case EMPTY_SHOPPINGLIST:
      return {
        ...state,
        empty: true,
        payload: action.payload,
        processing: false,
        processed: false
      };

    case CREATE_ITEM:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload
      };

    case CLEAR:
      return {
        ...state,
        processing: false,
        payload: null,
        processed: false,
        empty: false
      };

    case REQUEST_FINISHED:
      return {
        ...state,
        processing: false,
        processed: false,
        empty: false
      };

    default:
      return state;
  }
}
