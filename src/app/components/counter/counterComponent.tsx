import * as React from 'react'
import i18nProvider from '../../helpers/I18nProvider'
import {Ii18nState} from '../../redux/modules/i18n/i18nReducer.generated.ts'

export interface ICounterProps {
  count: number
}

export interface ICounterCallbacks {
  increment?: Function,
  decrement?: Function
}

export type ICounterPropTypes = ICounterProps & ICounterCallbacks
export function Counter (props: ICounterPropTypes & Ii18nState) {
  const {count} = props
  const s = require('./counterComponent.css')
  return (
    <div className={s.counter}>
      <h4>{props.strings.components.Counter.counterHeader}</h4>
      <button
        name="incBtn"
        onClick={props.increment}>
        {props.strings.components.Counter.increment}
      </button>
      <button
        name="decBtn"
        onClick={props.decrement}
        disabled={count <= 0}>
        {props.strings.components.Counter.decrement}
      </button>
      <p>{count}</p>
    </div>
  )
}

export default i18nProvider(Counter)
