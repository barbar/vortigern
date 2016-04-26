import * as React from 'react';

class Home extends React.Component<any, any> {
	render() {

		const s = require("./style.scss");

		return (
			<div className={s.home}>
				<img src={require('./bb.png')} />
			</div>
		);
	}
}

export default Home;