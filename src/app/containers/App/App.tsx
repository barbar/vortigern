import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Header} from '../../components';
import config from '../../../../config/main';

class App extends React.Component<any, any> {
	render() {
		return (
			<section>
				<Helmet {...config.app} {...config.app.head}/>
				<Header />
				{this.props.children}
			</section>
		);
	}
}

export default App;