import * as React from 'react'
import { Link } from 'react-router'
import i18nProvider from '../../helpers/I18nProvider'
import {Ii18nState, availableLanguages} from '../../redux/modules/i18n/i18nReducer.generated.ts'
export interface IHeaderProps {
  selectedLanguage?: string
}

export interface IHeaderActions {
  onLanguageChange?: EventListener
}

function Header (props: IHeaderProps & IHeaderActions & Ii18nState) {
  const s = require('./style.css')
  const {
    selectedLanguage = 'en',
    strings
  } = props
  return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/">{strings.components.header.links.Home}</Link></li>
          <li><Link to="about">{strings.components.header.links.About}</Link></li>
          <li><Link to="counter">{strings.components.header.links.Counter}</Link></li>
          <li><Link to="stars">{strings.components.header.links.Stars}</Link></li>
        </ul>
        <select value={selectedLanguage} onChange={props.onLanguageChange}>
          {availableLanguages.map(language => <option key={language} value={language}>{language}</option>)}
        </select>
        {}
      </nav>
    )
}

export default i18nProvider(Header)
