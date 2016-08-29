import * as React from 'react'
import SomeComponent from '../../containers/someComponent/someComponentContainer.ts'
import i18nProvider from '../../helpers/I18nProvider'
import {Ii18nState} from '../../redux/modules/i18n/i18nReducer.generated.ts'

interface IProps {

}

class <%= pascalEntityName %>View extends React.Component<IProps & Ii18nState, {}> {
  public render() {
    return(
      <SomeComponent />
    )
  }
}

export default i18nProvider(<%= pascalEntityName %>View)
