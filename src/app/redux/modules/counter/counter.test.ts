import { expect } from '../../../helpers/TestHelper';
import { ICounterAction, ICounterState, counterReducer,
 increment, INCREMENT, decrement, DECREMENT } from './counter';

/** Module */
describe('Counter Module', () => {

	/** Actions */
	describe('Actions', () => {
		describe('Increment', () => {
			it('has the correct type', () => {
				const action: ICounterAction = increment();
				expect(action.type).to.equal(INCREMENT);
			});
		});

		describe('Decrement', () => {
			it('has the correct type', () => {
				const action: ICounterAction = decrement();
				expect(action.type).to.equal(DECREMENT);
			});
		});
	});

	/** Reducer */
	describe('Reducer', () => {
		
		let state: ICounterState = { count: 10 };

		it('handles action of type INCREMENT', () => {
			const action = { type: INCREMENT };
			expect(counterReducer(state, action)).to.be.eql({ count: state.count + 1 });
		});

		it('handles action of type DECREMENT', () => {
			const action = { type: DECREMENT };
			expect(counterReducer(state, action)).to.be.eql({ count: state.count - 1 });
		});

		it('handles actions with unknown type', function() {
			expect(counterReducer(state, { type: '' })).to.be.eql({ count: state.count });
		});
	});

});
