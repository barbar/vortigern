import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './modules/counter/counter';
import { stargazersReducer } from './modules/stargazers/stargazers';

const rootReducer = combineReducers({
	routing: routerReducer,
	counter: counterReducer,
  stargazers: stargazersReducer
});

export default rootReducer;
