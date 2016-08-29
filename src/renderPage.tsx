import * as e6p from 'es6-promise'
(e6p as any).polyfill()
import 'isomorphic-fetch'

import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import { Provider } from 'react-redux'
import { createMemoryHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
const { ReduxAsyncConnect, loadOnServer } = require('redux-connect')
import { configureStore } from './app/redux/store'
import routes from './app/routes'
import { Html } from './app/views'
const manifest = require('../build/manifest.json')

function renderHTML(markup: any, store: Redux.Store) {
  const html = ReactDOMServer.renderToString(
    <Html markup={markup} manifest={manifest} store={store} />
  )

  return `<!doctype html> ${html}`
}

export function renderPage (location: string = '/', originalUrl: string = '/') {
  return new Promise((resolve, reject) => {
    const memoryHistory = createMemoryHistory(originalUrl)
    const store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store)

    match({ history, routes, location },
      (error, redirectLocation, renderProps) => {
        if (error) {
          reject({
            type: 'error',
            payload: error
          })
        } else if (redirectLocation) {
          reject({
            type: 'redirect',
            payload: redirectLocation
          })
        } else if (renderProps) {
          const asyncRenderData = Object.assign({}, renderProps, { store })

          loadOnServer(asyncRenderData).then(() => {
            const markup = ReactDOMServer.renderToString(
              <Provider store={store} key="provider">
                <ReduxAsyncConnect {...renderProps} />
              </Provider>
            )
            resolve(renderHTML(markup, store))
          })
        }
      })
  })
}
