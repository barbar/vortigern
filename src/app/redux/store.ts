import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
const createLogger = require('redux-logger');

const logger = createLogger();
const middlewares = [logger];

const finalCreateStore = compose(
	applyMiddleware(...middlewares)
)(createStore);

export function configureStore(initialState) {
	let store = finalCreateStore(rootReducer, initialState);
	return store;
};