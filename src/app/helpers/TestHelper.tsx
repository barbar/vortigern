/** React Specific */
import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers';

const fetchMock = require('fetch-mock');

/** Redux Mock Store Configuration */
import thunk from 'redux-thunk';

const configureStore = require('redux-mock-store');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const createStore = configureStore();
/***/

/** Render Component */
function renderComponent(ComponentClass, props?, state?) {
  return mount(
    <Provider store={createStore(rootReducer, state) }>
      <ComponentClass {...props} />
    </Provider>
  );
}

export { mockStore, fetchMock, renderComponent };
