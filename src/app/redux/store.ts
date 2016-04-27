import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
const createLogger = require('redux-logger');

let middlewares = [];

if (process.env.NODE_ENV == "development") {
	const logger = createLogger();
	middlewares.push(logger);
}

const finalCreateStore = compose(
	applyMiddleware(...middlewares)
)(createStore);

export function configureStore(initialState) {
	let store = finalCreateStore(rootReducer, initialState);
	return store;
};