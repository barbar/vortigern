var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssAssets = require('postcss-assets');
var appConfig = require('../main');

module.exports = function(config) {
  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai', 'es6-shim'],

    files: [ '../webpack/test.js' ],

    preprocessors: {
      '../src/**/*.ts': ['coverage'],
      '../src/**/*.tsx': ['coverage'],
      '../webpack/test.js': [ 'webpack' ]
    },

    plugins: [ "karma-*" ],

    reporters: [ 'mocha', 'coverage' ],

    coverageReporter: {
      type: 'html',
      dir: '../../coverage'
    },

    hostname: appConfig.host,

    port: appConfig.karmaPort,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.tsx?$/,
            loader: 'ts',
          },
          {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url?limit=1000&name=images/[hash].[ext]'
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
        ],
        postLoaders: [
          {
            test: /\.tsx?$/,
            loader: 'istanbul-instrumenter-loader',
            include: /src\/app/,
            exclude: [
              /node_modules/
            ]
          }
        ]
      },

      postcss: function() {
        return [
          precss,
          autoprefixer({ browsers: ['last 2 versions'] }),
          postcssAssets({relative: true})
        ];
      },

      resolve: {
        modulesDirectories: [
          '../../src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.ts', '.tsx', '.jsx']
      },

      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
      },

      plugins: [
        new webpack.IgnorePlugin(/^fs$/),
        new webpack.IgnorePlugin(/^react\/addons$/),
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
