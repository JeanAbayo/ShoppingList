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
        data: [],
        registering: true
      };
    case REGISTER_SUCCEEDS:
      return {
        ...state,
        registered: true,
        registering: false,
        data: action.data
      };
    case REGISTER_FAILS:
      return {
        ...state,
        registering: false,
        error: true,
        data: action.data
      };
    default:
      return state;
  }
}
