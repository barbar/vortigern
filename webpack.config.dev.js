var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var loaders = require('./webpack/loaders');

var config = {
	debug: true,
	devtool: 'source-map',

	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./src/app/index.tsx'
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	resolve: {
		root: [path.resolve(__dirname, 'src')],
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

}

module.exports = config;