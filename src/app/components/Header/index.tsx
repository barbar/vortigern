import * as React from 'react'
import { Link } from 'react-router'
export interface IHeaderProps {

}
export default function Header (props: IHeaderProps) {
  const s = require('./style.css')
  return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="counter">Counter</Link></li>
          <li><Link to="stars">Stars</Link></li>
        </ul>
      </nav>
    )
}

export { Header }
