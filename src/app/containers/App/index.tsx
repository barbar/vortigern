const appConfig = require('../../../../config/main');

import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header } from 'components';

const s = require('./style.css');

class App extends React.Component<any, any> {
  public render() {
    return (
      <section className={s.appContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export { App }
