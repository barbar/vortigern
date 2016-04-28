import * as React from 'react';
const s = require('./style.css');

export class Home extends React.Component<any, any> {
	render() {
		return (
			<div className={s.home}>
				<img src={require('./barbar.png')} />
				<p>Hello!</p>
			</div>
		);
	}
}
