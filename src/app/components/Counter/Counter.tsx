import * as React from 'react';

class Counter extends React.Component<any, any> {
	render() {
		return (
			<div>
				<button>INCREMENT</button>
				<button>DECREMENT</button>
			</div>
		);
	}
}

export default Counter;