/** React Specific */
import * as React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import {IState} from '../redux/reducers.ts'
import {configureStore as trueConfig} from '../redux/store.ts'
const { browserHistory } = require('react-router')
const fetchMock = require('fetch-mock')

function configureStore (initialState = {}) {
  const store = trueConfig(browserHistory, initialState)
  return store
}

/** Render Component */
function renderComponent(ComponentClass: any, props?: any) {
  const store: Redux.Store = configureStore({})
  return mount (
    <Provider store={store}>
      {props ? <ComponentClass {...props} /> : <ComponentClass />}
    </Provider>
  )
}

function renderSmartComponent(ComponentClass: any, state: any = {}, props?: any) {
  const store: Redux.Store = configureStore(state)
  return mount (
    <Provider store={store}>
      {props ? <ComponentClass {...props} /> : <ComponentClass />}
    </Provider>
  )
}

function stateFromStore (store: any): IState {
  return (store.getState() as IState)
}

export { configureStore, fetchMock, renderComponent, stateFromStore, renderSmartComponent }
