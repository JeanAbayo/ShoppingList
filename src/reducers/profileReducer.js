import { initialState } from "./initialState";
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  LOAD_PROFILE,
  REQUEST_FINISHED,
  ERROR
} from "../actions/constants";

export default function ProfileReducer(state = initialState.profile, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        loading_info: true,
        payload: [],
        loaded: false
      };

    case GET_PROFILE:
      return {
        ...state,
        loading_info: false,
        user: action.payload,
        loaded: true
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        loading_info: false,
        user: action.payload,
        loaded: true
      };

    case REQUEST_FINISHED:
      return {
        ...state,
        loading_info: false,
        payload: [],
        loaded: false
      };
    case ERROR:
      return {
        ...state,
        loading_info: false,
        payload: action.payload
      };
    default:
      return state;
  }
}
