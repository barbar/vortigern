import * as React from 'react'

export interface IStarsProps {
  count: number,
  isFetching: boolean,
  header?: string,
  hasLoaded: boolean
}
export default function Stars (props: IStarsProps) {
  const s = require('./starsComponent.css')
  return(
      <div className={s.stars}>
        <h1>{props.header || 'Default header'}</h1>
        <p className={s.count}>{props.isFetching ? 'Fetching Stars' : props.count}</p>
      </div>
    )
}

export {Stars }
