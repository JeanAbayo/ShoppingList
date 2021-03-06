import { initialState } from "./initialState";
import {
  REGISTERING,
  REGISTER_SUCCEEDS,
  REGISTER_FAILS,
  REGISTER_DONE
} from "../actions/constants";

export default function registerReducer(state = initialState.register, action) {
  switch (action.type) {
    case REGISTERING:
      return {
        ...state,
        registering: true
      };
    case REGISTER_SUCCEEDS:
      return {
        ...state,
        error: false,
        registered: true,
        registering: false,
        payload: action.payload
      };
    case REGISTER_FAILS:
      return {
        ...state,
        registering: false,
        error: true,
        payload: action.payload
      };
    case REGISTER_DONE:
      return {
        ...state,
        registering: false,
        registered: false,
        error: false
      };
    default:
      return state;
  }
}
