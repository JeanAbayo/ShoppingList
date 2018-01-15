import reducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const configureStore = () => {
	const middleware = [thunk /* ...your middleware (i.e. thunk) */];
	const store = createStore(
		reducers,
		composeEnhancers(
			applyMiddleware(...middleware)
			// other store enhancers if any
		)
	);

	return store;
};

export default configureStore;
