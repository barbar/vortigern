import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './app/redux/store';
import routes from './app/routes';

const store: Redux.Store = configureStore(window.__INITIAL_STATE__);
/* tslint:disable:max-line-length */
const history: HistoryModule.History = syncHistoryWithStore(browserHistory, store);
/* tslint:disable:max-line-length */

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>,
	document.getElementById('app')
);
