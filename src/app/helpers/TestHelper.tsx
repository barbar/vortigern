/**
 * What do we need for our Unit Tests?
 * 1. It should be running like-a-browser
 * 2. We need a renderComponent helper that renders React Components
 * 3. An helper for simulating events like button click, form submit
 * 4. Chai JQuery (Easy DOM)
 */

/** React Specific */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

/** Libraries */
import * as TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import * as $ from 'jquery';

const chai = require('chai');
const chaiJquery = require('chai-jquery');

/** Component Renderer */
function renderComponent(ComponentClass, props?, state?) {
  const componentInstance: any = TestUtils.renderIntoDocument(
    <Provider store={createStore(rootReducer, state) }>
      <ComponentClass {...props}/>
    </Provider>
  );

  const component: any = ReactDOM.findDOMNode(componentInstance);

  return $(component);
}

/** Easy DOM Simulations */
$.fn.simulate = function(eventName, value) {
  if (value) this.val(value);
  TestUtils.Simulate[eventName](this[0]);
}

chaiJquery(chai, chai.util, $);

export { renderComponent, expect }