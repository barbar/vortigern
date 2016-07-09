import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './modules/counter/counter';
import { starsReducer } from './modules/stars/stars';
const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
