import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
import reducers from "../reducers";

const history = createHistory();
const historyRouterMiddleware = routerMiddleware(history);

const middleWares = [thunkMiddleware, historyRouterMiddleware, logger];

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["routing"]
};

const persistReducers = persistReducer(persistConfig, reducers);

export default function configureStore() {
	let store = createStore(persistReducers, applyMiddleware(...middleWares));
	let persistor = persistStore(store);

	return { persistor, store };
}
