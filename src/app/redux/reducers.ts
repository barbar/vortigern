import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { IStore } from './IStore';
import { counterReducer } from './modules/counter';
import { starsReducer } from './modules/stars';

// import { reducer } from 'redux-connect';

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  // reduxAsyncConnect: reducer,
});

export default rootReducer;
