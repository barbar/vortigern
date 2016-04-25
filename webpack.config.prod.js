var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var loaders = require('./config/webpack/loaders');

var config = {
  entry: './src/client.js',

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  resolve: {
    root: [path.resolve(__dirname, 'src/app')],
    extensions: ["", ".ts", ".tsx", ".js", ".css", ".scss"]
  },

  module: {
    loaders: [
      loaders.tsx,
      loaders.json,
      loaders.scss,
      loaders.css,
      loaders.eot,
      loaders.woff,
      loaders.ttf,
      loaders.svg,
      loaders.img
    ],
    preLoaders: [
      loaders.jsSourceMap
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
		new webpack.optimize.UglifyJsPlugin({
		  compressor: {
		    warnings: false
		  }
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	]

};

module.exports = config;