import * as React from 'react'
import GithubStars from '../../containers/githubStars/githubStarsContainer.ts'
import i18nProvider from '../../helpers/I18nProvider'
import {Ii18nState} from '../../redux/modules/i18n/i18nReducer.generated.ts'
interface IProps {

}

class Stars extends React.Component<IProps & Ii18nState, {}> {
  public render() {
    return(
      <GithubStars header={this.props.strings.views.stars.alternateTitle} />
    )
  }
}

export default i18nProvider(Stars)
