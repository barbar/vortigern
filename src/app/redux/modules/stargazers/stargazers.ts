import 'isomorphic-fetch';
import { IStarGazers, IStarGazersAction } from './stargazers.model';

/** Action Types */
export const GET_STARGAZERS_REQUEST: string = 'GET_STARGAZERS_REQUEST';
export const GET_STARGAZERS_SUCCESS: string = 'GET_STARGAZERS_SUCCESS';
export const GET_STARGAZERS_FAILURE: string = 'GET_STARGAZERS_FAILURE';

const initialState: IStarGazers = {
  isFetching: false
};

/** Reducer */
export function stargazersReducer(state = initialState, action: IStarGazersAction) { // tslint:disable-line:max-line-length

  switch (action.type) {
    case GET_STARGAZERS_REQUEST:
      return Object.assign(state, {}, {
        isFetching: true
      });

    case GET_STARGAZERS_SUCCESS:
      return Object.assign(state, {}, {
        isFetching: false,
        count: action.count
      });

    case GET_STARGAZERS_FAILURE:
      return Object.assign(state, {}, {
        isFetching: false,
        error: true,
        message: action.message
      });

    default:
      return state;
  }

}

/** Async Action Creator */
export function getStargazers(): Redux.Dispatch {
  return dispatch => {
    dispatch(getStargazersRequest());
    return fetch('https://api.github.com/repos/barbar/vortigern')
      .then(res => {
        if (res.ok) {
          res.json()
            .then(res => dispatch(getStargazersSuccess(res.stargazers_count)));
        } else {
          res.json()
            .then(res => dispatch(getStargazersFailure(res)));
        }
      })
      .catch(err => dispatch(getStargazersFailure(err)));
  };
}

/** Action Creator: Request */
export function getStargazersRequest(): IStarGazersAction {
  return {
    type: GET_STARGAZERS_REQUEST
  };
}

/** Action Creator: Success */
export function getStargazersSuccess(count: number): IStarGazersAction {
  return {
    type: GET_STARGAZERS_SUCCESS,
    count
  };
};

/** Action Creator: Failure */
export function getStargazersFailure(message: any): IStarGazersAction {
  return {
    type: GET_STARGAZERS_FAILURE,
    message
  };
}
