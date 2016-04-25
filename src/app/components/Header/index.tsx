import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component<any, any> {
	render() {
		const s = require('./style.scss');

		return (
			<nav className={s.nav}>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="about">About</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Header;