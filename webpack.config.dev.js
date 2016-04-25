var path = require('path');
var webpack = require('webpack');
var loaders = require('./config/webpack/loaders');

var config = {
	devtool: '#source-map',

	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./src/client.js'
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
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
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

}

module.exports = config;