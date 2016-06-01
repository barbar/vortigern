import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/modules/counter/counter';
import { ICounter } from '../../redux/modules/counter/counter.model';
const s = require('./style.css');

interface IProps {
  counter: ICounter;
  increment: Redux.ActionCreator;
  decrement: Redux.ActionCreator;
}

function mapStateToProps(state: any) {
  return {
		counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch) {
	return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
	};
}

export class Counter extends React.Component<IProps, void> {

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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
