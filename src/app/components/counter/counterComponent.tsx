import * as React from 'react'

// This is often useful, delete if you don't need it
// import { Link } from 'react-router'

export interface ICounterProps {
  count: number
}

export interface ICounterCallbacks {
  increment?: Function,
  decrement?: Function
}

export type ICounterPropTypes = ICounterProps & ICounterCallbacks
export default function Counter (props: ICounterPropTypes) {
  const {count} = props
  const s = require('./counterComponent.css')
  return (
    <div className={s.counter}>
      <h4>Counter Example</h4>
      <button
        name="incBtn"
        onClick={props.increment}>
        INCREMENT
      </button>
      <button
        name="decBtn"
        onClick={props.decrement}
        disabled={count <= 0}>
        DECREMENT
      </button>
      <p>{count}</p>
    </div>
  )
}

export {Counter }
