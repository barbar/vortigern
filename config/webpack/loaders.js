/**
 * Reusable, easy-to-configure Webpack Loaders
 */

'use strict';

exports.jsSourceMap = {
	test: /\.js$/, 
	loader: "source-map-loader"
};

exports.tsx = {
	test: /\.tsx?$/,
	loader: 'react-hot!ts',
	exclude: /(node_modules|\.test\.ts$)/
};

exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

exports.css = {
	test: /\.css$/,
	loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss'
};

exports.scss = {
	test: /\.scss$/,
	loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap'
};

exports.eot = {
	test: /\.eot(\?.*)?$/,
	loader: "file?name=fonts/[hash].[ext]",
};

exports.woff = {
	test: /\.(woff|woff2)(\?.*)?$/,
	loader:"file-loader?name=fonts/[hash].[ext]",
};

exports.ttf = {
	test: /\.ttf(\?.*)?$/,
	loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]",
};

exports.svg = {
	test: /\.svg(\?.*)?$/,
	loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]",
};

exports.img = {
	test: /\.(jpe?g|png|gif)$/i,
	loader: 'url?limit=1000&name=images/[hash].[ext]'
};