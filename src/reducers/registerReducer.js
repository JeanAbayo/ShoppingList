import {
  REGISTERING,
  REGISTER_SUCCEEDS,
  REGISTER_FAILS
} from "../actions/constants";

const initialState = {
  data: [],
  registering: false,
  registered: false,
  error: false
};

export default function registerReducer(state = initialState, action) {
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
    default:
      return state;
  }
}
