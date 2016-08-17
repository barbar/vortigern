import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer, {ICounterState} from './modules/counter/counterReducer'
import starsReducer, {IStarsState} from './modules/stars/starsReducer'
const reducer: {} = require('redux-connect').reducer

export const reducers = {
  counterReducer: counterReducer('counter'),
  starsReducer: starsReducer('stars')
}

// Add question marks so that we don't have to replicate the whole state in the mocks
export interface IState {
  counter?: ICounterState,
  stars?: IStarsState
}
const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  counter: reducers.counterReducer.reducer,
  stars: reducers.starsReducer.reducer,
  reduxAsyncConnect: reducer
})

export default rootReducer
