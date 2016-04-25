import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const middlewares = [];

const finalCreateStore = compose(
	applyMiddleware(...middlewares)
)(createStore);

export function configureStore(initialState) {
	let store = finalCreateStore(rootReducer, initialState);
	return store;
};