import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../../redux/modules/counter/counter';
import { ICounter } from '../../redux/modules/counter/counter.model';


interface IProps {
  counter: ICounter;
  increment: Redux.ActionCreator;
  decrement: Redux.ActionCreator;
}

function mapStateToProps(state) {
  return {
		counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch) {
	return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
	};
}

export class Counter extends React.Component<IProps, void> {

	render() {
		const { increment, decrement, counter } = this.props;

		return (
			<div>
				<h4>Counter Example</h4>
				<button
          onClick={increment}>
            INCREMENT
        </button>
				<button
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
