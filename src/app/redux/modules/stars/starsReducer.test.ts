
import { expect } from 'chai'
import {reducers} from '../../reducers'
import {stateFromStore, fetchMock, configureStore} from '../../../helpers/TestHelper.tsx'
import githubMock from '../../../mocks/githubData'
/** Module */
describe('Stars Module', () => {
  let store: Redux.Store
  /** Reducer */
  describe('Actions', () => {
    beforeEach(() => {
      store = configureStore({
        stars: {isFetching: false}
      })
    })
    it('will set fetching to true', () => {
      store.dispatch(reducers.starsReducer.setFetching(true))
      expect(stateFromStore(store).stars.isFetching).to.be.eql(true)
    })

    it('will set fetching to false', () => {
      store.dispatch(reducers.starsReducer.setFetching(false))
      expect(stateFromStore(store).stars.isFetching).to.be.eql(false)
    })
  })
  describe('Async Actions', () => {
    beforeEach(() => {
      store = configureStore({})
    })
    afterEach(() => {
      fetchMock.restore()
    })

    /** 200 */
    it('dispatches Request and Success Actions on OK requests', (done) => {

      fetchMock.mock('https://api.github.com/repos/barbar/vortigern', githubMock.succuess)

      const promise = store.dispatch(reducers.starsReducer.getStars(null))
      expect(stateFromStore(store).stars.isFetching).to.eql(true)

      promise.then(() => {
        expect(stateFromStore(store).stars.isFetching).to.eql(false)
        expect(stateFromStore(store).stars.count).to.eql(githubMock.succuess.body.stargazers_count)
      })
        .then(done)
        .catch(done)
    })
    /** 400 */
    it('dispatches Failure on failed requests', (done) => {
      fetchMock.mock('https://api.github.com/repos/barbar/vortigern', githubMock.failure)
      const promise = store.dispatch(reducers.starsReducer.getStars(null))
      expect(stateFromStore(store).stars.isFetching).to.eql(true)
      promise.then(() => {
        expect(stateFromStore(store).stars.isFetching).to.eql(false)
        expect(stateFromStore(store).stars.message).to.eql(githubMock.failure.body.message)
        expect(stateFromStore(store).stars.error).to.eql(true)
      })
        .then(done)
        .catch(done)
    })
  })
})
