import Header, {IHeaderProps, IHeaderActions} from '../../components/Header/Header.tsx'
import {IState, reducers} from '../../redux/reducers.ts'

// potentially import a reducer
// import headerReducer from '../../redux/modules/header'

import {compose} from 'recompose'
import {connect} from 'react-redux'

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */

// These will be the props for the exported React Class
interface ISmartProps {
  // header?: string // This is an example, using this would look like <Example header='Optional String' />
}

function mapStateTopProps (state: IState): IHeaderProps {
return {
      selectedLanguage: state.i18n.selectedLanguage
     }
}
function mappedActions (dispatch: Function): IHeaderActions {
  return {
    onLanguageChange: (e: any) => dispatch(reducers.i18nReducer.changeLanguage(e.currentTarget.value))
  }
}

export default compose<IHeaderProps, ISmartProps> (
  connect(mapStateTopProps, mappedActions)
)(Header)
