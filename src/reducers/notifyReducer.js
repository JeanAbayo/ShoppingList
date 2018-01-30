import { SUCCESS, ERROR, CLEAR, INFO, WARNING } from "../actions/constants";

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
    case WARNING:
      return {
        ...state,
        type: WARNING,
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
