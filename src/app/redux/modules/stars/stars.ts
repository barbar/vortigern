import { IStars, IStarsAction } from './stars.model';

/** Action Types */
export const STARS_REQUEST: string = 'STARS_REQUEST';
export const STARS_SUCCESS: string = 'STARS_SUCCESS';
export const STARS_FAILURE: string = 'STARS_FAILURE';

/** Initial State */
const initialState: IStars = {
  isFetching: false,
};

/** Reducer */
export function starsReducer(state = initialState, action: IStarsAction) {

  switch (action.type) {
    case STARS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case STARS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        count: action.count,
      });

    case STARS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        message: action.message,
      });

    default:
      return state;
  }

}

/** Async Action Creator */
export function getStars(): Redux.Dispatch {
  return dispatch => {
    dispatch(starsRequest());

    return fetch('https://api.github.com/repos/barbar/vortigern')
      .then(res => {
        if (res.ok) {
          return res.json()
            .then(res => dispatch(starsSuccess(res.stargazers_count)));
        } else {
          return res.json()
            .then(res => dispatch(starsFailure(res)));
        }
      })
      .catch(err => dispatch(starsFailure(err)));
  };
}

/** Action Creator */
export function starsRequest(): IStarsAction {
  return {
    type: STARS_REQUEST,
  };
}

/** Action Creator */
export function starsSuccess(count: number): IStarsAction {
  return {
    type: STARS_SUCCESS,
    count,
  };
}

/** Action Creator */
export function starsFailure(message: any): IStarsAction {
  return {
    type: STARS_FAILURE,
    message,
  };
}
