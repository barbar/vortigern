const appConfig = require('../config/main');

import * as e6p from "es6-promise";
(e6p as any).polyfill();

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as ReactRouter from "react-router";
const RouterContext = ReactRouter.RouterContext as any;

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './app/redux/store';
import routes from "./app/routes";

import { Html } from './app/containers';
const manifest = require('../build/manifest.json');

const Express = require('express');
const path = require('path');
const compression = require('compression');
const Chalk = require("chalk");
const favicon = require('serve-favicon');

const store = configureStore();
const app = Express();

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));

if (process.env.NODE_ENV == "development") {
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack/dev');
  const webpackCompiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true
  }));

  app.use(require("webpack-hot-middleware")(webpackCompiler));
}

app.use(favicon(path.resolve("favicon.ico")));

app.use('/public', Express['static'](path.join(__dirname, '../build/public')));

app.get('*', (req, res) => {
  ReactRouter.match({ routes: routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        const markup = ReactDOMServer.renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const html = ReactDOMServer.renderToString(
          <Html markup={markup} manifest={manifest} store={store}/>
        );

        res.status(200).send(`<!doctype html> ${html}`);
      } else {
        res.status(404).send('Not Found?')
      }
    })
});

app.listen(appConfig.port, "localhost", err => {
  err ? console.error(Chalk.bgRed(err))
    : console.info(Chalk.black.bgGreen(`\n\n💂  Listening at http://localhost:${appConfig.port}\n`));
});