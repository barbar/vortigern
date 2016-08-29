import makeReducer from '../BaseReducer'

export interface ICounterState {
  count: number
}
export default makeReducer({count: 0}, {
  increment: (payload?: void, state?: ICounterState) => {
    return Object.assign({}, state, {
      count: state.count + 1
    })
  },
  decrement: (payload?: void, state?: ICounterState) => {
    return Object.assign({}, state, {
      count: state.count - 1
    })
  }
})
