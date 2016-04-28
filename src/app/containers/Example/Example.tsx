import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICounterAction, ICounterState, increment, decrement} from '../../redux/modules';

interface IProps {
  counter: ICounterState;
  dispatch: {
		increment: Redux.ActionCreator;
		decrement: Redux.ActionCreator
  };
}

function mapStateToProps(state) {
  return {
		counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch) {
	return {
    dispatch: bindActionCreators({ increment, decrement }, dispatch)
	};
}

export class Example extends React.Component<IProps, {}> {
	render() {
		const { dispatch, counter } = this.props;
		return (
			<div>
				<h4>Example</h4>
				<button onClick={dispatch.increment}>INCREMENT</button>
				<button onClick={dispatch.decrement}>DECREMENT</button>
				<p>{counter.count}</p>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
