import * as React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';

const routes = (
	<Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="about" component={About} />
  </Route>
);

export default routes;