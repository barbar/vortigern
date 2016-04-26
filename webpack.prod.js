var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestPlugin = require('webpack-manifest-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
	resolve: {
		root: [path.resolve(__dirname, 'src')],
    extensions: ["", ".ts", ".tsx", ".js", ".css", ".scss"],
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  },

	entry: { 
		app: './src/client.tsx' 
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
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss')
			},

			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap')
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
	},
	postcss: function () {
	    return [autoprefixer];
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		  compress: {
		    warnings: false,
		  }
		}),
		new CleanWebpackPlugin(['build'], {
		  verbose: true,
		  dry: false
		}),
	 	new ExtractTextPlugin("css/[name].css"),
		new webpack.NoErrorsPlugin(),
		new ManifestPlugin({
		  fileName: '../manifest.json',
		}),
		new webpack.DefinePlugin({
		  'process.env': {
		    BROWSER: JSON.stringify(true),
		    NODE_ENV: JSON.stringify('production'),
		  }
		}),
	]

}

module.exports = config;