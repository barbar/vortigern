/** React Specific */
import { mount } from 'enzyme';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import configureStore from 'redux-mock-store';
import rootReducer from 'redux/reducers';

const fetchMock = require('fetch-mock');

/** Redux Mock Store Configuration */
import thunk from 'redux-thunk';

const middlewares: Redux.Middleware[] = [thunk];
const mockStore = configureStore(middlewares);

/** Render Component */
function renderComponent(ComponentClass, state?, props?) {
  const store = createStore(rootReducer, state, compose(
    applyMiddleware(...middlewares),
  ));

  return mount(
    <Provider store={store}>
      <ConnectedRouter
        history={createHistory()}
      >
        <ComponentClass {...props} />
      </ConnectedRouter>
    </Provider>,
  );
}

export { mockStore, fetchMock, renderComponent };
