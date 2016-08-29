const appConfig = require('../config/main')

import * as e6p from 'es6-promise'
(e6p as any).polyfill()
import 'isomorphic-fetch'
import {renderPage} from './renderPage'
const express = require('express')
const path = require('path')
const compression = require('compression')
const Chalk = require('chalk')
const favicon = require('serve-favicon')

const app = express()

app.use(compression())

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackConfig = require('../config/webpack/dev')
  const webpackCompiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    quiet: true,
  }))

  app.use(require('webpack-hot-middleware')(webpackCompiler))
}

app.use(favicon(path.join(__dirname, '../src/favicon.ico')))

app.use('/public', express.static(path.join(__dirname, '../build/public')))

app.get('*', (req: any, res: any) => {
  renderPage(req.url, req.originalUrl)
  .then((markup) => {
    res.status(200).send(markup)
  })
  .catch(({type, payload}) => {
    if (type === 'error') {
      res.status(500).send(payload.message)
    } else if (type === 'redirect') {
      res.redirect(302, payload.pathname + payload.search)
    }
  })
})

app.listen(appConfig.port, appConfig.host, (err: string) => {
  if (err) {
    console.error(Chalk.bgRed(err))
  } else {
    console.info(Chalk.black.bgGreen(
      `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`
    ))
  }
})
