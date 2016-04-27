import * as React from 'react';

class Home extends React.Component<any, any> {
	render() {

		const s = require('./style.css');

		return (
			<div className={s.home}>
				<h1>sdfsdf</h1>
				<img src={require('./bb.png')} />
			</div>
		);
	}
}

export default Home;