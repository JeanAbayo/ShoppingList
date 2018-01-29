import { SUCCESS, ERROR, CLEAR, INFO, WARN } from "../actions/constants";

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        type: SUCCESS,
        data: action.data
      };
    case ERROR:
      return {
        ...state,
        type: ERROR,
        data: action.data
      };
    case INFO:
      return {
        ...state,
        type: INFO,
        data: action.data
      };
    case WARN:
      return {
        ...state,
        type: WARN,
        data: action.data
      };
    case CLEAR:
      return {
        ...state,
        data: ""
      };
    default:
      return state;
  }
}
