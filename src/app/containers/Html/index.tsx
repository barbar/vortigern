import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import * as Helmet from 'react-helmet';
const serialize = require('serialize-javascript');

class Html extends React.Component<any, any> {

  render() {
    const { assets, component, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent() }
          {head.title.toComponent() }
          {head.meta.toComponent() }
          {head.link.toComponent() }
          {head.script.toComponent() }
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }} charSet="UTF-8" />
          <script src={assets.javascript.main} charSet="UTF-8" />
        </body>
      </html>
    );
  }
}

export default Html;