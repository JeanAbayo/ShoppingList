import { SUCCESS, DANGER, CLEAR } from "../actions/constants";

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        type: SUCCESS,
        data: action.data
      };
    case DANGER:
      return {
        ...state,
        type: DANGER,
        data: action.data
      };
    case CLEAR:
      return {
        ...state,
        type: DANGER,
        data: ""
      };
    default:
      return state;
  }
}
