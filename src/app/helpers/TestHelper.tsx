/**
 * React Specific
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

/**
 * Testing Tools
 */
import * as TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import * as $ from 'jquery';

const chai = require('chai');
const chaiJquery = require('chai-jquery');

/**
 * Renders React Component to DOM
 */
function renderComponent(ComponentClass, props?, state?) {
  const componentInstance: any = TestUtils.renderIntoDocument(
    <Provider store={createStore(rootReducer, state) }>
      <ComponentClass {...props}/>
    </Provider>
  );

  const component: any = ReactDOM.findDOMNode(componentInstance);

  return $(component);
}

/**
 * For Easier Event Simulations
 */
$.fn.simulate = function(eventName, value) {
  if (value) this.val(value);
  TestUtils.Simulate[eventName](this[0]);
}

chaiJquery(chai, chai.util, $);

export { renderComponent, expect }