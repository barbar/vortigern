import * as React from 'react'

class Home extends React.Component<any, any> {
  public render() {
    const s = require('./style.css')
    return (
      <div className={s.home}>
        <img src={require('./barbar.png')} />
        <p>Hello!</p>
      </div>
    )
  }
}

export { Home }
