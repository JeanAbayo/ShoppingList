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
        loading: true,
        loaded: false
      };

    case UPDATE_ITEM:
      return {
        ...state,
        loading: false,
        loaded: true,
        payload: action.payload
      };

    case DELETE_ITEM:
      return {
        ...state,
        loading: false,
        loaded: true,
        payload: action.payload
      };

    case EMPTY_ITEMS:
      return {
        ...state,
        loading: false,
        loaded: false,
        empty: true,
        items: [],
        payload: action.payload
      };

    case FETCH_MANY_ITEMS:
      return {
        ...state,
        loading: false,
        items: action.items,
        empty: false
      };

    case REQUEST_FINISHED:
      return {
        ...state,
        loading: false,
        loaded: false,
        empty: false
      };

    default:
      return state;
  }
}
