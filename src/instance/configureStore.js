import reducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { loadState, saveState } from "./persistState";

export const history = createHistory();

const composeEnhancers = composeWithDevTools({});
const persistedState = loadState;

export const configureStore = () => {
	const middleware = [
		thunk /* ...your middleware (i.e. thunk) */,
		routerMiddleware(history),
		logger
	];
	const store = createStore(
		reducers,
		persistedState,
		composeEnhancers(
			applyMiddleware(...middleware)
			// other store enhancers if any
		)
	);

	store.subscribe(() => {
		saveState(store.getState());
	});

	return store;
};
