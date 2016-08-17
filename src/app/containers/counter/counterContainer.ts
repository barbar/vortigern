import Counter, {ICounterPropTypes, ICounterCallbacks, ICounterProps} from '../../components/counter/counterComponent'
import {reducers, IState} from '../../redux/reducers.ts'
import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */

// These will be the props for the exported React Class
interface ISmartProps {
  // header?: string // This is an example, using this would look like <Example header='Optional String' />
}

function mapStateToProps (state: IState): ICounterProps {
  return {
    count: state.counter.count
  }
}

const actions: ICounterCallbacks = {
  increment: reducers.counterReducer.increment,
  decrement: reducers.counterReducer.decrement
}
export default compose<ICounterPropTypes, ISmartProps> (
  connect(mapStateToProps, (actions as any)), // as any because connect typings is wrong
  lifecycle({
    // Use the non arrow version so that the 'this' will have this.props, etc...
    componentWillMount: function componentWillMount (props: ICounterProps) {
      // Add your lifecycle login here.
    }
  })
)(Counter)
