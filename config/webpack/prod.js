var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssAssets = require('postcss-assets');
var stylelint = require('stylelint');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestPlugin = require('webpack-manifest-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
	bail: true,
		
	resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
  },

	entry: { 
		app: './src/client.tsx'
	},

	output: {
		path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
	},

	module: {
		preLoaders: [
		  {
		    test: /\.tsx?$/,
		    loader: 'tslint'
		  }
		],
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
			{
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015'
      },
			{
			  test: /\.json$/,
			  loader: 'json-loader',
			},
			{
				test: /\.css$/,
				include: /src\/app/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
					'postcss'
				)
			},
			{
				test: /\.css$/,
				exclude: /src\/app/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css'
				)
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
	  return [
	  	stylelint({files: "../../src/app/*.css"}),
	  	precss,
	  	autoprefixer({ browsers: ['last 2 versions'] }), 
	  	postcssAssets({relative: true})
	  ];
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin("vendor","js/[name].[hash].js"),
		new webpack.optimize.UglifyJsPlugin({
		  compress: {
		    warnings: false,
		  }
		}),
		new ExtractTextPlugin("css/[name].[hash].css"),
		new webpack.optimize.DedupePlugin(),
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