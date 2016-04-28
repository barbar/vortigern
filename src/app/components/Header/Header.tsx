import * as React from 'react';
import { Link } from 'react-router';

const s = require('./style.css');

export class Header extends React.Component<any, any> {
	render() {
		return (
			<nav className={s.nav}>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="about">About</Link></li>
					<li><Link to="example">Example</Link></li>
				</ul>
			</nav>
		);
	}
}
