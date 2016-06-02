import * as React from 'react';
import { increment, decrement } from '../../redux/modules/counter/counter';
import { ICounter } from '../../redux/modules/counter/counter.model';
const { connect } = require('react-redux');
const s = require('./style.css');

interface IProps {
  counter: ICounter;
  increment: Redux.ActionCreator;
  decrement: Redux.ActionCreator;
}

@connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  })
)
class Counter extends React.Component<IProps, void> {

  render() {
    const { increment, decrement, counter } = this.props;

    return (
      <div className={s.counter}>
        <h4>Counter Example</h4>
        <button
          name="incBtn"
          onClick={increment}>
            INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={decrement}
          disabled={counter.count <= 0}>
            DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}

export { Counter };
