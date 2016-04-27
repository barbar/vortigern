var path = require('path');

var config = {
  devtool: 'source-map',
  target: "node",
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
  },
  entry: './src/server.tsx',
  output: {
    path: path.resolve('./build/public'),
    filename: '../server.js',
    publicPath: '/public/',
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
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015'
      },
      {
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
      {
        test: /\.css$/,
        include: /src\/app/,
        loaders: [
          'isomorphic-style-loader',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ]
      }
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