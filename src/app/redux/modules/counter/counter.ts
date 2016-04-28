/** Action Types */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/** Type Definitions */
export interface ICounter {
	count: number;
}

export interface IAction {
	type?: string;
}

/** Counter: Initial State */
const initialState: ICounter = {
	count: 0
};

/** Reducer: CounterReducer */
export function counterReducer(state = initialState, action?: IAction) {

	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1
			};

		case DECREMENT:
			return {
				count: state.count - 1
			};
		
		default:
			return state;
	}
}

/** Action: Increments the Counter */
export function increment() {
	return {
		type: INCREMENT
	};
}

/** Action: Decrements the Counter */
export function decrement() {
	return {
		type: DECREMENT
	};
}
