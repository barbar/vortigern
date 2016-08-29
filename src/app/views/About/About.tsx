import * as React from 'react'
const s = require('./style.css')
import i18nProvider from '../../helpers/I18nProvider'
import {Ii18nState} from '../../redux/modules/i18n/i18nReducer.generated.ts'

interface IHomeProps {

}
function About (props: IHomeProps & Ii18nState) {
  return (
    <div className={s.about}>
      <h4>{props.strings.views.about.about}</h4>
    </div>
  )
}

export default i18nProvider(About)
