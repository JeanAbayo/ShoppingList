import { combineReducers } from "redux";
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";

export default combineReducers({
	RegisterReducer,
	LoginReducer
});
