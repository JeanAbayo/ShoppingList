import { initialState } from "./initialState";
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  LOAD_PROFILE
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
      console.log("this was dispatched");
      return {
        ...state,
        loading_info: false,
        payload: action.payload,
        loaded: true
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        loading_info: false,
        payload: action.payload,
        loaded: true
      };
    default:
      return state;
  }
}
