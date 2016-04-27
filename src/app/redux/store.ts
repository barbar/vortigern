import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import DevTools from "../helpers/DevTools";
const createLogger = require('redux-logger');

export function configureStore(initialState: any) {

	let middlewares = [];

	if (process.env.NODE_ENV == "development") {
		const logger = createLogger();
		middlewares.push(logger);
	}

	const finalCreateStore = compose(
		applyMiddleware(...middlewares),
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : DevTools.instrument()
	)(createStore);

	const store = finalCreateStore(rootReducer, initialState);

	if (process.env.NODE_ENV == "development" && (module as any).hot)
		(module as any).hot.accept("./reducers", () => {
			store.replaceReducer((require("./reducers")));
		});
	
	return store;
};