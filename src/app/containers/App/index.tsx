const appConfig = require('../../../../config/main');
import { Header } from 'components';
import { About, Counter, Home, Stars } from 'containers';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import {Route} from 'react-router';

const style = require('./style.css');

class App extends React.Component<any, any> {
  public render() {
    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/stars" component={Stars} />
        <Route path="/counter" component={Counter} />
        {this.props.children}
      </section>
    );
  }
}

export { App };
