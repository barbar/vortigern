import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICounter, increment, decrement} from '../../redux/modules';

interface IProps extends React.Props<any>{
  counter: ICounter;
  dispatch: Redux.Dispatch
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: bindActionCreators({ increment, decrement }, dispatch)
});

class Example extends React.Component<any, {}> {
	constructor(props) {
		super(props);
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		this.props.dispatch.increment();
	}

	handleDecrement() {
		this.props.dispatch.decrement();
	}

	render() {
		return (
			<div>
				<h4>Example</h4>
				<button onClick={this.handleIncrement}>INCREMENT</button>
				<button onClick={this.handleDecrement}>DECREMENT</button>
				<p>{this.props.counter.count}</p>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
