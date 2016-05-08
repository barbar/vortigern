import * as stargazers from './stargazers';
import { IStarGazers, IStarGazersAction } from './stargazers.model';

import { expect } from '../../../helpers/TestHelper.tsx';
import thunk from 'redux-thunk';
const fetchMock = require('fetch-mock');
const configureMockStore = require('redux-mock-store');

/** Mock Store */
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/** Mock Data */
const githubResponse = {
  stargazers_count: 999
};

const errResponse = {
  message: 'ERROR :-O'
};

/** Stargazers Module */
describe('Stargazers Module', () => {

  /** Action Creators */
  describe('Action Creators', () => {

    describe('Get Stargazers (Async)', () => {

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
          {type: stargazers.GET_STARGAZERS_REQUEST},
          {type: stargazers.GET_STARGAZERS_SUCCESS, count: githubResponse.stargazers_count}
        ];

        const store = mockStore({});

        store.dispatch(stargazers.getStargazers())
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
          { type: stargazers.GET_STARGAZERS_REQUEST },
          { type: stargazers.GET_STARGAZERS_FAILURE, message: errResponse }
        ];

        const store = mockStore({});

        store.dispatch(stargazers.getStargazers())
          .then(() => expect(store.getActions()).to.eql(expectedActions))
          .then(() => done())
          .catch(err => done(err));
      });

    });

  });


});
