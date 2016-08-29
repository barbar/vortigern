import * as React from 'react'
import i18nProvider from '../../helpers/I18nProvider'
import {Ii18nState} from '../../redux/modules/i18n/i18nReducer.generated.ts'

interface IHomeProps {

}
function Home (props: IHomeProps & Ii18nState) {
  const s = require('./style.css')
  return (
    <div className={s.home}>
      <img src={require('./barbar.png')} />
      <p>{props.strings.views.home.hello}</p>
    </div>
  )
}

export default i18nProvider(Home)
