import * as React from 'react';
const s = require('./style.css');

class Home extends React.Component<any, any> {
	render() {
		return (
			<div className={s.home}>
				<img src={require('./bb.png')} />
				<p>Hello!</p>
			</div>
		);
	}
}

export default Home;