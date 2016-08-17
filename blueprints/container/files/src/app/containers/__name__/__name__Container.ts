import <%= pascalEntityName %>, {I<%= pascalEntityName %>PropTypes} from '../../components/<%= camelEntityName %>/<%= camelEntityName %>Component'
import {IState, reducers} from '../../redux/reducers.ts'

// potentially import a reducer
// import <%= camelEntityName %>Reducer from '../../redux/modules/<%= camelEntityName %>'

import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */

// These will be the props for the exported React Class
interface ISmartProps {
  // header?: string // This is an example, using this would look like <Example header='Optional String' />
}

function mapStateTopProps (state: IState): I<%= pascalEntityName %>Props {
return {
      // These will be mapped as props
     }
}

const mappedActions = {
  // A few examples
  getStars: reducers.starsReducer.getStars,
  increment: reducers.counterReducer.increment
}

export default compose<I<%= pascalEntityName %>Props, ISmartProps> (
  connect(mapStateTopProps, (mappedActions as any)), // as any because connect typings is wrong
  lifecycle({
    // Use the non arrow version so that the 'this' will have this.props, etc...
    componentWillMount: function componentWillMount (props: I<%= pascalEntityName %>Props) {
      // Add your lifecycle login here.
    }
  })
)(<%= pascalEntityName %>)
