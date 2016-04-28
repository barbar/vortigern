const appConfig = require('../../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header } from '../../components';
import DevTools from '../../helpers/DevTools';

const s = require('./style.css');

export class App extends React.Component<any, any> {
	render() {
		return (
			<section className={s.appContainer}>
				<Helmet {...appConfig.app} {...appConfig.app.head}/>
				<Header />
				{this.props.children}
				{ appConfig.env === 'development'	&& typeof window === 'object'
					&& !window.devToolsExtension ? <DevTools /> : null }
			</section>
		);
	}
}
