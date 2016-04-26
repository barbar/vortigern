import { createStore, applyMiddleware, compose } from 'redux';
const createLogger = require('redux-logger');
import rootReducer from './reducers';

const logger = createLogger();

const middlewares = [logger];

const finalCreateStore = compose(
	applyMiddleware(...middlewares)
)(createStore);

function configureStore(initialState) {
	return finalCreateStore(rootReducer, initialState);
};

export default configureStore;