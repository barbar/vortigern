var path = require("path");
var webpack = require("webpack");

var config = {
  entry: ["./src/app/index.tsx"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/static/'
  },

  resolve: {
    root: [path.resolve(__dirname, 'src')],
    extensions: ["", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.join(__dirname, 'src')
      }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
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