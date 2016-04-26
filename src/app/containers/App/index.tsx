import * as React from 'react';
import Header from '../../components/Header';
import '../../styles/main.scss';

class App extends React.Component<any, any> {
	render() {
		return (
			<section>
				<Header />
				{this.props.children}
			</section>
		);
	}
}

export default App;