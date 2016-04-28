const appConfig = require('../../../config/main');
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../helpers/DevTools';
const createLogger = require('redux-logger');
const router = routerMiddleware(browserHistory);

export function configureStore(initialState?: any): Redux.Store {

	let middlewares = [router, thunk];

	if (appConfig.env === 'development') {
		const logger = createLogger();
		middlewares.push(logger);
	}

	const finalCreateStore = compose(
		applyMiddleware(...middlewares),
		appConfig.env === 'development' && typeof window === 'object' 
		&& typeof window.devToolsExtension !== 'undefined' 
		? window.devToolsExtension() : DevTools.instrument()
	)(createStore);

	const store: Redux.Store = finalCreateStore(rootReducer, initialState);

	if (appConfig.env === 'development' && (module as any).hot) {
		(module as any).hot.accept('./reducers', () => {
			store.replaceReducer((require('./reducers')));
		});
	}

	return store;
};
