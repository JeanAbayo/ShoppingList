import { combineReducers } from "redux";
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";
import NotifyReducer from "./notifyReducer";
import LogoutReducer from "./logoutReducer";

export default combineReducers({
	register: RegisterReducer,
	login: LoginReducer,
	notify: NotifyReducer,
	logout: LogoutReducer
});
