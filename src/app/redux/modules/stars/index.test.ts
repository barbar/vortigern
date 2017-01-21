import { expect } from 'chai';
import { fetchMock, mockStore } from 'helpers/TestHelper.tsx';
import * as stars from './';
import { IStarsAction } from 'models/stars';

/** Mock Data */
const githubResponse = {
  stargazers_count: 999,
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
          body: githubResponse,
        });

        const expectedActions: IStarsAction[] = [
          { type: stars.GET_REQUEST },
          { type: stars.GET_SUCCESS, payload: { count: githubResponse.stargazers_count } },
        ];

        const store = mockStore({});

        store.dispatch(stars.getStars())
          .then(() => expect(store.getActions()).to.eql(expectedActions))
          .then(() => done())
          .catch((err) => done(err));
      });

      /** 400 */
      it('dispatches Failure on failed requests', (done) => {

        fetchMock.mock('https://api.github.com/repos/barbar/vortigern', {
          status: 400,
          body: errResponse,
        });

        const expectedActions: IStarsAction[] = [
          { type: stars.GET_REQUEST },
          { type: stars.GET_FAILURE, payload: { message: errResponse } },
        ];

        const store = mockStore({});

        store.dispatch(stars.getStars())
          .then(() => expect(store.getActions()).to.eql(expectedActions))
          .then(() => done())
          .catch((err) => done(err));
      });

    });

  });

});
