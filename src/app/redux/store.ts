const appConfig = require('../../../config/main')
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const createLogger = require('redux-logger')
export function configureStore(history: any, initialState?: any): Redux.Store {

  let middlewares: any[] = [
    routerMiddleware(history),
    thunk
  ]

  /** Add Only Dev. Middlewares */
  if ((appConfig.env !== 'production' && appConfig.env !== 'test') && process.env.BROWSER) {
    const logger = createLogger()
    middlewares.push(logger)
  }

  const finalCreateStore = compose(
    applyMiddleware(...middlewares),
    appConfig.env === 'development' &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension() : (f: any) => f
  )(createStore)

  const store: Redux.Store = finalCreateStore(rootReducer, initialState)

  if (appConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')))
    })
  }
  return store
}
