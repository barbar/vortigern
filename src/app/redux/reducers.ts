import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer, {ICounterState} from './modules/counter/counterReducer'
import starsReducer, {IStarsState} from './modules/stars/starsReducer'
import i18nReducer, {Ii18nState} from './modules/i18n/i18nReducer.generated'
const reducer: {} = require('redux-connect').reducer

export const reducers = {
  counterReducer: counterReducer('counter'),
  starsReducer: starsReducer('stars'),
  i18nReducer
}

// Add question marks so that we don't have to replicate the whole state in the mocks
export interface IState {
  counter?: ICounterState,
  stars?: IStarsState,
  i18n?: Ii18nState
}
const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  counter: reducers.counterReducer.reducer,
  stars: reducers.starsReducer.reducer,
  i18n: i18nReducer.reducer,
  reduxAsyncConnect: reducer
})

export default rootReducer
