var path = require('path');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var appConfig = require('../main');

module.exports = function (config) {
  const conf = {
    frameworks: ['mocha', 'chai', 'es6-shim'],

    browsers: ['PhantomJS'],

    files: ['../webpack/test.js'],

    preprocessors: {
      '../src/**/*.ts': ['sourcemap'],
      '../src/**/*.tsx': ['sourcemap'],
      '../webpack/test.js': ['webpack']
    },

    plugins: ['karma-*'],

    reporters: ['mocha', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['text-summary'],
      fixWebpackSourcePaths: true,
      dir: 'coverage',
      'report-config': {
        html: {
          subdir: 'html'
        },
        lcov: {
          subdir: 'lcov'
        }
      },
    },

    hostname: appConfig.host,

    port: appConfig.karmaPort,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',

      resolve: {
        modules: [
          path.resolve(__dirname),
          '../../src',
          '../../src/app',
          '../../src/app/redux',
          'node_modules'
        ],
        extensions: ['.json', '.js', '.ts', '.tsx', '.jsx']
      },

      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.tsx?$/,
            loader: 'tslint-loader'
          },
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader?useCache=false'
          },
          {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.css$/,
            include: path.resolve('./src/app'),
            loaders: [
              'style-loader',
              'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
              'postcss-loader'
            ]
          },
          {
            test: /\.css$/,
            exclude: path.resolve('./src/app'),
            loader: 'style-loader!css-loader'
          },
          {
            enforce: 'post',
            test: /\.tsx?$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: {esModules: true},
            },
            include: path.resolve('./src/app'),
            exclude: /node_modules|\.test\.tsx?$/,
          }
        ],
      },

      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },

      plugins: [
        new webpack.LoaderOptionsPlugin({
          options: {
            tslint: {
              failOnHint: true
            },
            postcss: function () {
              return [
                postcssNext(),
                postcssAssets({
                  relative: true
                }),
              ];
            },
          }
        }),
        new webpack.IgnorePlugin(/^fs$/),
        new webpack.IgnorePlugin(/^react\/addons$/),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify('development')
          }
        })
      ]
    },

    webpackServer: {
      noInfo: true
    }
  };

  if (process.env.NODE_ENV === 'ci') {
    conf.autoWatch = false;
    conf.singleRun = true;
    conf.browsers.push('Firefox');
    conf.coverageIstanbulReporter.reports.push('lcov');
  } else {
    conf.coverageIstanbulReporter.reports.push('html');
    conf.browsers.push('Chrome');
  }

  config.set(conf);
};
