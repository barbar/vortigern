import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as ReactRouter from "react-router";
const RouterContext = ReactRouter.RouterContext as any;

import * as Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './app/redux/store';
import routes from "./app/routes";

const assetsManifest = require('../build/manifest.json');
const css = assetsManifest['app.css'];
const js = assetsManifest['app.js'];

const Express = require('express');
const path = require('path');
const compression = require('compression');
const Chalk = require("chalk");

const store = configureStore({});
const app = Express();

app.use(compression());

// app.use(ServeFavicon(Path.resolve("favicon.ico")));

app.use('/public', Express['static'](path.join(__dirname, '../build/public')));

app.get('*', (req, res) => {
  ReactRouter.match({ routes: routes, location: req.url }, 
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        const innerHtml = ReactDOMServer.renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const head = Helmet.rewind();
        const html = `<!doctype html>
<html>
  <head>
    ${head.title.toString()}
    ${head.meta.toString()}
    ${head.link.toString()}
    ${`<link href="public/${css}" media="all" rel="stylesheet" />`}
  </head>
  <body>
    <main id="app">${innerHtml}</main>
    <script>window.__INITIAL_STATE__  = ${JSON.stringify(store.getState())};</script>
    <script src="public/${js}"></script>
  </body>
</html>`;

        res.status(200).send(html);
      } else {
        res.status(404).send('Not Found?')
      }
    })
});

const appPort = 8889;

app.listen(appPort, "localhost", err => {
    err ? console.error(Chalk.red(err))
        : console.info(Chalk.dim(`\nlistening at http://localhost:${appPort}\n`));
});