import config from '../../../../config/main';
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header } from '../../components';
import DevTools from '../../helpers/DevTools';

const s = require('./style.css');

class App extends React.Component<any, any> {
	render() {
		return (
			<section className={s.appContainer}>
				<Helmet {...config.app} {...config.app.head}/>
				<Header />
				{this.props.children}
				{ config.env == "development"	&& typeof window === 'object'
					&& !window.devToolsExtension ? <DevTools /> : null }
			</section>
		);
	}
}

export default App;