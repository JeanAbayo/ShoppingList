import { combineReducers } from "redux";
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";
import NotifyReducer from "./notifyReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
	register: RegisterReducer,
	login: LoginReducer,
	notify: NotifyReducer,
	routing: routerReducer
});
