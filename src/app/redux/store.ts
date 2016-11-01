const appConfig = require('../../../config/main');
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
const createLogger = require('redux-logger');

export function configureStore(history, initialState?: any): Redux.Store<any> {

    let middlewares: Redux.Middleware[] = [
        routerMiddleware(history),
        thunk,
    ];

    /** Add Only Dev. Middlewares */
    if (appConfig.env !== 'production' && process.env.BROWSER) {
        const logger = createLogger();
        middlewares.push(logger);
    }

    // const devTools = appConfig.env === 'development' &&
    //   typeof window === 'object' &&
    //   typeof window.devToolsExtension !== 'undefined'
    //   ? window.devToolsExtension() : f => f;

    // const finalCreateStore = compose(
    //     applyMiddleware(...middlewares)
    // )(createStore);

    // const store: Redux.Store<any> = finalCreateStore(rootReducer, initialState);

    const composeEnhancers = composeWithDevTools({
        // Specify here name, actionsBlacklist, actionsCreators and other options
    });
    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    ), initialState);

    if (appConfig.env === 'development' && (module as any).hot) {
        (module as any).hot.accept('./reducers', () => {
            store.replaceReducer((require('./reducers')));
        });
    }

    return store;
}
