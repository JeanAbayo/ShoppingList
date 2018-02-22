import { initialState } from "./initialState";
import {
  LOGING_IN,
  LOGIN_SUCCEEDS,
  LOGIN_FAILS,
  LOGOUT
} from "../actions/constants";

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case LOGING_IN:
      return {
        ...state,
        logging_in: true
      };
    case LOGIN_SUCCEEDS:
      return {
        ...state,
        error: false,
        isAuthenticated: true,
        logging_in: false,
        payload: action.payload
      };
    case LOGIN_FAILS:
      return {
        ...state,
        logging_in: false,
        error: true,
        payload: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
