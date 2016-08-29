import { expect } from 'chai'
import {reducers} from '../../reducers'
import {configureStore} from '../../../helpers/TestHelper.tsx'
/** Module */
describe('Counter Module', () => {
  let store: Redux.Store
  /** Reducer */
  describe('Reducer', () => {
    beforeEach(() => {
      store = configureStore({
        counter: {
          count: 10
        }
      })
    })
    it('handles action of type INCREMENT', () => {
      store.dispatch(reducers.counterReducer.increment())
      expect(store.getState().counter.count).to.be.eql(11)
    })

    it('handles action of type DECREMENT', () => {
      store.dispatch(reducers.counterReducer.decrement())
      expect(store.getState().counter.count).to.be.eql(9)
    })
  })
})
