import makeReducer from '../BaseReducer'

// Make sure to add this to src/redux/reducers.ts

/** Type Definitions */
export interface I<%= pascalEntityName %>State {
  example: boolean
}

/** Initial State */
const initialState: I<%= pascalEntityName %>State = {
  example: true
}

/** Actions
 * Accepts a payload, and the current reducer substate
 * must return a new version of the state.
 */

const actions = {
  setRequestSuccessExample: (payload: boolean, state?: I<%= pascalEntityName %>State): I<%= pascalEntityName %>State => {
    return Object.assign({}, state, {
        example: payload,
      })
  }
}

/** Async Actions
 * Must return a promise.
 * Accepts a payload, and the syncActions
 */

const asyncActions = {
  getStars: (payload?: boolean, syncActions?: typeof actions) => {
      syncActions.setRequestSuccessExample(payload)
      return fetch('https://api.github.com/repos/barbar/vortigern')
      .then((res) => {
        if (res.ok) {
            return res.json()
              .then(res => {
                return syncActions.setRequestSuccessExample(true)
              })
          } else {
            return res.json()
              .then(res => {
                return syncActions.setRequestSuccessExample(false)
              })
          }
      })
      .catch(() => syncActions.setRequestSuccessExample(false))
  }
}

export default makeReducer(initialState, actions, asyncActions)
