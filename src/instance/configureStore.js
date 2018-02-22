import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
import reducers from "../reducers";
// For developer tools
import { composeWithDevTools } from "redux-devtools-extension";

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
	let store = createStore(
		persistReducers,
		// For development ease, while surfing the state
		composeWithDevTools(
			applyMiddleware(...middleWares)
			// other store enhancers if any
		)
	);
	let persistor = persistStore(store);

	return { persistor, store };
}
