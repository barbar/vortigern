var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = function(config) {
  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      '../webpack/test.js'
    ],

    preprocessors: {
      '../webpack/test.js': [ 'webpack' ]
    },

    plugins: [
      "karma-*"
    ],

    reporters: [ 'mocha' ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.tsx?$/,
            loader: 'react-hot!ts',
          },
          {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url?limit=1000&name=images/[hash].[ext]'
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
            loaders: [
              'style',
              'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
              'postcss'
            ]
          },
          {
            test: /\.css$/,
            exclude: /src\/app/,
            loader: 'style!css',
          },
        ]
      },
      postcss: function() {
        return [autoprefixer({ browsers: ['last 2 versions'] })];
      },
      resolve: {
        modulesDirectories: [
          '../../src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.ts', '.tsx', '.jsx']
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify('development'),
          }
        }),
      ]
    },

    webpackServer: {
      noInfo: true
    }
  })
}
