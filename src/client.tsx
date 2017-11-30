require('babel-core/register');
import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';

// import routes from './app/routes';
import {App} from 'containers';
import createHistory from 'history/createBrowserHistory';
// import log from 'log';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Store from './app/redux/store';
const store = new Store(
  createHistory(),
  window.__INITIAL_STATE__,
);
// const connectedCmp = (props) => <ReduxAsyncConnect {...props} />;

const s = store.store();

ReactDOM.render(
  <Provider store={s} key="provider">
    <ConnectedRouter
      history={store.history()}
    >
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
