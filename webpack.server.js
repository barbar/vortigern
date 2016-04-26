var webpack = require('webpack');
var path = require('path');

var config = {
  target: "node",
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".css"],
  },
  entry: "./src/server.tsx",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /(node_modules|\.test\.ts$)/
			},
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|\.test\.ts$)/
      },
      {
        test: /\.css$/,
        include: /src\/app/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: /src\/app/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [],
  node: {
   console: false,
   global: false,
   process: false,
   Buffer: false,
   __filename: false,
   __dirname: false,
  }
}

module.exports = config;