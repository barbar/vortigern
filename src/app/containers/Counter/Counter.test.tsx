import { expect } from 'chai';
import { renderComponent } from '../../helpers/TestHelper';
import { Counter } from './Counter';

describe('Counter Example Container', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(Counter);
	});

});
