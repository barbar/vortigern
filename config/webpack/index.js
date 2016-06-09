'use strict';

if(process.env.ENV_VARIABLE === 'production'){
  module.exports = require('./prod');
}

module.exports = require('./dev');