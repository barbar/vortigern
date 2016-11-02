import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="counter">Counter</Link></li>
          <li><Link to="stars">Stars</Link></li>
        </ul>
      </nav>
    );
  }
}

export { Header }
