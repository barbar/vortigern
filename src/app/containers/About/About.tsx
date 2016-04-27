import * as React from 'react';
import { Counter } from '../../components';

class About extends React.Component<any, any> {
	render() {
		return (
			<div>
				<h4>About</h4>
				<Counter />
			</div>
		);
	}
}

export default About;