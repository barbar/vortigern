import { expect } from '../../../helpers/TestHelper';
import { IAction, ICounter, counterReducer,
 increment, INCREMENT, decrement, DECREMENT } from './counter';

/** Module */
describe('Counter Module', () => {

	/** Actions */
	describe('Actions', () => {
		describe('Increment', () => {
			it('has the correct type', () => {
				const action: IAction = increment();
				expect(action.type).to.equal(INCREMENT);
			});
		});

		describe('Decrement', () => {
			it('has the correct type', () => {
				const action: IAction = decrement();
				expect(action.type).to.equal(DECREMENT);
			});
		});
	});

	/** Reducer */
	describe('Reducer', () => {
		it('handles action of type INCREMENT', () => {
			const action: IAction = { type: INCREMENT };
			expect(counterReducer({ count: 0 }, action)).to.be.eql({ count: 1 });
		});

		it('handles action of type DECREMENT', () => {
			const action: IAction = { type: DECREMENT };
			expect(counterReducer({ count: 1 }, action)).to.be.eql({ count: 0 });
		});

		it('handles actions with unknown type', function() {
			expect(counterReducer({ count: 0 }, {})).to.be.eql({ count: 0 });
		});
	});

});
