/** Action Types */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/** Type Definitions */
export interface ICounterState {
	count: number;
}

export interface ICounterAction {
	type: string;
}

/** Counter: Initial State */
const initialState: ICounterState = {
	count: 0
};

/** Reducer: CounterReducer */
export function counterReducer(state = initialState, action?: ICounterAction) {

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
export function increment(): ICounterAction {
	return {
		type: INCREMENT
	};
}

/** Action: Decrements the Counter */
export function decrement(): ICounterAction {
	return {
		type: DECREMENT
	};
}
