import { LOGGING_IN, LOGIN_SUCCEEDS, LOGIN_FAILS } from "../actions/constants";

const initialState = {
  data: [],
  logging_in: false,
  logged_in: false,
  error: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        data: [],
        logging_in: true
      };
    case LOGIN_SUCCEEDS:
      return {
        ...state,
        logged_in: true,
        logging_in: false,
        data: action.data
      };
    case LOGIN_FAILS:
      return {
        ...state,
        logging_in: false,
        error: true,
        data: action.data
      };
    default:
      return state;
  }
}
