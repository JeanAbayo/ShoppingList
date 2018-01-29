import { LOGING_IN, LOGIN_SUCCEEDS, LOGIN_FAILS } from "../actions/constants";

const initialState = {
  logging_in: false,
  logged_in: false,
  error: false,
  payload: []
};

export default function loginReducer(state = initialState, action) {
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
        logged_in: true,
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
    default:
      return state;
  }
}
