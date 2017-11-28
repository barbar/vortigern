const appConfig = require('../../../config/main');
// import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { IStore } from './IStore';
import rootReducer from './reducers';

export default class ConfigureStore {
  public History?: any = null;
  public routerMiddlewareH?: any = null;
  public initialState?: any = null;
  public Store: Redux.Store<any>;
  constructor(History: any, initialState?: IStore) {
    this.History = History;
    this.routerMiddlewareH = routerMiddleware(this.History);
    this.initialState = initialState;
    const middlewares: Redux.Middleware[] = [
      this.routerMiddlewareH,
      thunk,
      // loadingBarMiddleware(),
    ];

    /** Add Only Dev. Middlewares */
    if (appConfig.env !== 'production' && process.env.BROWSER) {
      const logger = createLogger({
        level: 'info',
      });
      middlewares.push(logger);
    }

    const composeEnhancers = (appConfig.env !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    this.Store = createStore(rootReducer, this.initialState, composeEnhancers(
      applyMiddleware(...middlewares),
    ));

    if (appConfig.env === 'development' && (module as any).hot) {
      (module as any).hot.accept('./reducers', () => {
        this.Store.replaceReducer((require('./reducers')));
      });
    }
  }

  public store(): Redux.Store<any> {
    return this.Store;
  }

  public history() {
    return this.History;
  }
}
