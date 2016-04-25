var path = require('path');
var webpack = require('webpack');

var config = {
	debug: true,
	devtool: 'source-map',

	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./src/index.tsx'
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
			{
				test: /\.tsx?$/,
				loader: 'react-hot!ts-loader',
				include: path.join(__dirname, 'src')
			}
		],
		preLoaders: [
		  { test: /\.js$/, loader: "source-map-loader" }
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

}

module.exports = config;