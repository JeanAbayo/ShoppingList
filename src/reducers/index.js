import { combineReducers } from "redux";
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";
import NotifyReducer from "./notifyReducer";
import ShoppinglistReducer from "./shoppinglistReducer";
import { routerReducer } from "react-router-redux";
import ItemsReducer from "./itemsReducer";
import SearchReducer from "./searchReducer";

export default combineReducers({
	register: RegisterReducer,
	login: LoginReducer,
	notify: NotifyReducer,
	routing: routerReducer,
	shoppinglist: ShoppinglistReducer,
	items: ItemsReducer,
	search: SearchReducer
});
