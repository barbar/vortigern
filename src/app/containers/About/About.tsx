import * as React from 'react';
const s = require('./style.css');

export class About extends React.Component<any, any> {
  render() {
    return (
      <div className={s.about}>
        <h4>About</h4>
      </div>
    );
  }
}
