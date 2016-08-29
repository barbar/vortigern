import {connect} from 'react-redux'
import {IState} from '../redux/reducers.ts'
function mapStateToProps (state: IState) {
  return state.i18n
}
export default function i18nProvider<T> (target: T): T {
  // These types can be really frustrating
  return (connect(mapStateToProps)((target as any)) as any)
}
