import { expect } from 'chai';
import { fetchMock, mockStore } from '../../../helpers/TestHelper.tsx';
import * as stars from './stars';
import { IStars, IStarsAction } from './stars.model';

/** Mock Data */
const githubResponse = {
  stargazers_count: 999, // a little wish :)
};

const errResponse = {
  message: 'ERROR :-O',
};

/** Stargazers Module */
describe('Stars Module', () => {

  /** Action Creators */
  describe('Action Creators', () => {

    describe('Get Stars (Async)', () => {

      afterEach(() => {
        fetchMock.restore();
      });

      /** 200 */
      it('dispatches Request and Success Actions on OK requests', (done) => {

        fetchMock.mock('https://api.github.com/repos/barbar/vortigern', {
          status: 200,
          body: githubResponse
        });

        const expectedActions = [
          { type: stars.STARS_REQUEST },
          { type: stars.STARS_SUCCESS, count: githubResponse.stargazers_count }
        ];

        const store = mockStore({});

        store.dispatch(stars.getStars())
          .then(() => expect(store.getActions()).to.eql(expectedActions))
          .then(() => done())
          .catch(err => done(err));
      });

      /** 400 */
      it('dispatches Failure on failed requests', (done) => {

        fetchMock.mock('https://api.github.com/repos/barbar/vortigern', {
          status: 400,
          body: errResponse
        });

        const expectedActions = [
          { type: stars.STARS_REQUEST },
          { type: stars.STARS_FAILURE, message: errResponse }
        ];

        const store = mockStore({});

        store.dispatch(stars.getStars())
          .then(() => expect(store.getActions()).to.eql(expectedActions))
          .then(() => done())
          .catch(err => done(err));
      });

    });

  });

});
