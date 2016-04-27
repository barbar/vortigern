import config from '../../../config/main';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router'
import * as thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../helpers/DevTools';
const createLogger = require('redux-logger');
const router = routerMiddleware(browserHistory);

export function configureStore(initialState: any) {

	let middlewares = [router, thunk];

	if (config.env === 'development') {
		const logger = createLogger();
		middlewares.push(logger);
	}

	const finalCreateStore = compose(
		applyMiddleware(...middlewares),
		config.env === 'development' && typeof window === 'object' 
		&& typeof window.devToolsExtension !== 'undefined' 
		? window.devToolsExtension() : DevTools.instrument()
	)(createStore);

	const store = finalCreateStore(rootReducer, initialState);

	if (config.env === 'development' && (module as any).hot)
		(module as any).hot.accept('./reducers', () => {
			store.replaceReducer((require('./reducers')));
		});

	return store;
};