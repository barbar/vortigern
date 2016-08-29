import * as React from 'react'
import i18nProvider from '../../helpers/I18nProvider'
import {Ii18nState} from '../../redux/modules/i18n/i18nReducer.generated.ts'
// This is often useful, delete if you don't need it
// import { Link } from 'react-router'
// import { reducers } from '../../redux/reducers.ts'

export interface I<%= pascalEntityName %>Props {

}

export interface I<%= pascalEntityName %>Callbacks {

}

export type I<%= pascalEntityName %>PropTypes = I<%= pascalEntityName %>Props & I<%= pascalEntityName %>Callbacks
function <%= pascalEntityName %> (props: I<%= pascalEntityName %>Props & Ii18nState) {
  const s = require('./<%= camelEntityName %>Component.css')
  return (
      <div className={s.<%= camelEntityName %>}>
        {props.strings.components.header.links.About}
      </div>
    )
}

export default i18nProvider({<%= pascalEntityName %> })
