import Stars, {IStarsProps} from '../../components/stars/starsComponent'
import {IState} from '../../redux/reducers.ts'
import {reducers} from '../../redux/reducers'
import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */
interface ISmartProps {
  header?: string
}

function mapStateToProps (state: IState) {
  return { hasLoaded: state.stars.hasLoaded, count: state.stars.count, isFetching: state.stars.isFetching }
}
const actions = {
  getStars: reducers.starsReducer.getStars
}
export default compose<IStarsProps, ISmartProps> (
  connect(mapStateToProps, (actions as any)),
  lifecycle({
    // Use the non arrow version so that the 'this' will have this.props, etc...
    componentWillMount: function componentWillMount (props: IStarsProps) {
      if (!this.props.hasLoaded) {
        this.props.getStars()
      }
    }
  })
)(Stars)
