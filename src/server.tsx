const appConfig = require('../config/main');

import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
// const { ReduxAsyncConnect, loadOnServer } = require('redux-connect');
// import { configureStore } from './app/redux/store';
// import routes from './app/routes';

import {App} from 'containers';

import log from 'log';
import { IStore } from 'redux/IStore';
import { Html } from './app/containers';
import Store from './app/redux/store';

const manifest = require('../build/manifest.json');

const express = require('express');
const path = require('path');
const compression = require('compression');
const Chalk = require('chalk');
const favicon = require('serve-favicon');

const app = express();

app.use(compression());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack/dev');
  const webpackCompiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    quiet: true,
  }));

  app.use(require('webpack-hot-middleware')(webpackCompiler));
}

app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const initialState: IStore = {
    stars: {count: 0},
    counter: {count: 0},
  };
  const store = new Store(memoryHistory, initialState);
  const context: {
    url?: any;
  } = {};

  const html = ReactDOMServer.renderToString(
    <Provider store={store.store()} key="provider">
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App/>
      </StaticRouter>
    </Provider>,
  );

  if (context.url) {
    res.redirect(302, context.url);
  } else {
    res.status(200).send(renderHTML(html, store.store()));
  }
  // match({ history, routes, location },
  //   (error, redirectLocation, renderProps) => {
  //     if (error) {
  //       res.status(500).send(error.message);
  //     } else if (redirectLocation) {
  //       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  //     } else if (renderProps) {
  //       const asyncRenderData = Object.assign({}, renderProps, { store });

  //       loadOnServer(asyncRenderData).then(() => {
  //         const markup = ReactDOMServer.renderToString(
  //           <Provider store={store} key="provider">
  //             <ReduxAsyncConnect {...renderProps} />
  //           </Provider>,
  //         );
  //         res.status(200).send(renderHTML(markup, store));
  //       });
  //     } else {
  //       res.status(404).send('Not Found?');
  //     }
  //   });
});

app.listen(appConfig.port, appConfig.host, (err) => {
  if (err) {
    log('ERR: ', Chalk.bgRed(err));
  } else {
    log('ERR: ', Chalk.black.bgGreen(
      `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`,
    ));
  }
});

function renderHTML(markup: string, store: any) {
  const html = ReactDOMServer.renderToString(
    <Html markup={markup} manifest={manifest} store={store} />,
  );

  return `<!doctype html> ${html}`;
}
