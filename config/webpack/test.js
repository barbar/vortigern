require('es6-promise').polyfill();
require('isomorphic-fetch');

var context = require.context('../../src', true, /.test\.tsx?$/);
context.keys().forEach(context);
