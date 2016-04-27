var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./dev');

var app = express();
var compiler = webpack(config);

var host = 'localhost';
var port = 8890;

app.use(require('webpack-dev-middleware')(compiler, {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});