import * as React from 'react'

// This is often useful, delete if you don't need it
// import { Link } from 'react-router'
// import { reducers } from '../../redux/reducers.ts'

export interface I<%= pascalEntityName %>Props {

}

export interface I<%= pascalEntityName %>Callbacks {

}

export type I<%= pascalEntityName %>PropTypes = I<%= pascalEntityName %>Props & I<%= pascalEntityName %>Callbacks
export default function <%= pascalEntityName %> (props: I<%= pascalEntityName %>Props) {
  const s = require('./<%= camelEntityName %>Component.css')
  return (
      <div className={s.<%= camelEntityName %>}>
        This sure is a nice new component!
      </div>
    )
}

export {<%= pascalEntityName %> }
