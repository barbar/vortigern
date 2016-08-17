interface IReducer {
  reducer?: Function
}
export default function makeReducer
<ISubState, T, V>
(defaultState: ISubState, Actions: T, AsyncActions?: V): (ID: string) => V & T & IReducer {
  return (ID: string) => {
    if (typeof ID === undefined || typeof ID === null) {
      throw new Error('Reducers must have an ID')
    }

    if (typeof defaultState === undefined || typeof defaultState === null) {
      throw new Error('Reducers must have a default state')
    }

    const newSyncActions: T & IReducer = Object.assign({}, Actions)
    const newAsyncActions: V = Object.assign({}, AsyncActions)

    // Actions are now functions that auto return types
    Object.keys(Actions).forEach((key) => {
      ((newSyncActions as any)[key]) = (payload: any) => {
        return { type: `${ID}/${key}`, payload }
      }
    })

    if (AsyncActions) {
      // async actions have dispatch and the payload injected into them.
      Object.keys(AsyncActions).forEach((key) => {
        if ((Actions as any)[key]) {
          throw new Error('You cannot have a Action and Async Action with the same name: ' + key)
        }
        (newAsyncActions as any)[key] = (payload: any) => {
          return (dispatch: Function) => (AsyncActions as any)[key](payload, newSyncActions)(dispatch)
        }
      })
    }
    const baseReducer = {
      reducer: (state: ISubState, action: IAction<any>) => {
        state = state || defaultState
        /* tslint:disable */
        // Linting is disabled because there is no other way to do this
        const [ActionID, actionMethod] = action.type.split('/')
        if (ActionID === ID) {
          if ((newSyncActions as any)[actionMethod]) {
            return (Actions as any)[actionMethod](action.payload, state)
          }
        }
        return state
        /* tslint:enable */
      }
    }
    return Object.assign(baseReducer, newSyncActions, newAsyncActions)
  }
}
