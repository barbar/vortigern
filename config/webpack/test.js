var context = require.context('../../src', true, /.test\.tsx?$/);
context.keys().forEach(context);