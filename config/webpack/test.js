require('es6-promise').polyfill();
require('isomorphic-fetch');

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

var context = require.context('../../src', true, /.test\.tsx?$/);
context.keys().forEach(context);
