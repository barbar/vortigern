var path = require('path');
var fs = require('fs');
console.log('Running webpack page render build')
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = require('./server')
config.entry = './src/renderPage.tsx'
config.output.filename = '../renderPage.js',
module.exports = config;
