import { initialState } from "./initialState";

import {
  UPDATE_ITEM,
  DELETE_ITEM,
  FETCH_MANY_ITEMS,
  EMPTY_ITEMS,
  REQUEST_LOADING,
  REQUEST_FINISHED
} from "../actions/constants";

export default function ItemsReducer(state = initialState.items, action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        processing: true
      };

    case UPDATE_ITEM:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload,
        empty: false
      };

    case DELETE_ITEM:
      return {
        ...state,
        processing: false,
        processed: true,
        payload: action.payload,
        empty: false
      };

    case EMPTY_ITEMS:
      return {
        ...state,
        processing: false,
        processed: true,
        empty: true,
        payload: action.payload
      };

    case FETCH_MANY_ITEMS:
      return {
        ...state,
        processing: false,
        items: action.items,
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
