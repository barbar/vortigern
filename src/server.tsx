import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import * as Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './app/redux/store';

const routes = require('./app/routes');

const Express = require('express');
const path = require('path');
const morgan = require('morgan');

function renderElementWithState (store: any, element: any) {
  const innerHtml = ReactDOMServer.renderToString(element);
  const head = Helmet.rewind(); 

  const css = '';
  const js = require('../build/public/js/app');

  return `<!doctype html>
<html>
  <head>
    ${head.title.toString()}
    ${head.meta.toString()}
    ${head.link.toString()}
    ${`<link href="${css}" media="all" rel="stylesheet" />`}
  </head>
  <body>
    <div id="root">${innerHtml}</div>
    <script>window.__INITIAL_STATE__  = ${JSON.stringify(store.getState())};</script>
    <script src="${js}"></script>
  </body>
</html>`
}

function render(store, renderProps) {
  return renderElementWithState(store, (
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  )
  )
}

function createHandler(baseHandler) {
  const handler = baseHandler;

  handler.use(morgan('combined'));

  if (process.env.NODE_ENV == "production") {
    handler.use(require('compression')());
  }

  handler.use('/public', Express['static'](path.join(__dirname, '../build/public')));

  handler.get('*', (req, res) => {
    const store = configureStore({});

    console.log(typeof configureStore);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.send(render(store, renderProps))
      } else {
        res.status(404).send('Not Found')
      }
    })
  });

  return handler;
}

const defaultHandler = createHandler(new Express());

require('http').createServer(defaultHandler).listen(8889, () => {
  console.log(`[http] Server listening to :${8889}`);
})
