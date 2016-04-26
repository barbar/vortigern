var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ManifestPlugin = require('webpack-manifest-plugin');

var config = {
	debug: true,
	devtool: 'source-map',

	resolve: {
		root: [path.resolve(__dirname, 'src')],
    extensions: ["", ".ts", ".tsx", ".js", ".css", ".scss"],
    modulesDirectories: [
      'src',
      'node_modules'
    ],
  },
  
	entry: {
		app: [
			'webpack-hot-middleware/client?reload=true',
			'./src/client.tsx'
		]
	},

	output: {
		path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].js'
	},

	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'react-hot!ts',
			},

			{
			  test: /\.json$/,
			  loader: 'json-loader',
			},

			{
				test: /\.css$/,
				loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss'
			},

			{
				test: /\.scss$/,
				loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap'
			},

			{
				test: /\.eot(\?.*)?$/,
				loader: "file?name=fonts/[hash].[ext]",
			},

			{
				test: /\.(woff|woff2)(\?.*)?$/,
				loader:"file-loader?name=fonts/[hash].[ext]",
			},

			{
				test: /\.ttf(\?.*)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]",
			},

			{
				test: /\.svg(\?.*)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]",
			},

			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'url?limit=1000&name=images/[hash].[ext]'
			},
		],
		preLoaders: [
		  {
		  	test: /\.js$/, 
		  	loader: "source-map-loader"
		  },
		]
	},

	postcss: function () {
	    return [autoprefixer];
	},

	plugins: [
		new ManifestPlugin({
		  fileName: '../manifest.json',
		}),
		new webpack.DefinePlugin({
		  'process.env': {
		    BROWSER: JSON.stringify(true),
		    NODE_ENV: JSON.stringify('development'),
		  }
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

}

module.exports = config;