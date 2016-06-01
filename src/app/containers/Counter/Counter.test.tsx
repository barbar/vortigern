import { expect } from 'chai';
import * as sinon from 'sinon';
import { renderComponent } from '../../helpers/TestHelper';
import { Counter } from './Counter';

describe('<Counter />', () => {

	let component;
  let increment;
  let decrement;

	beforeEach(() => {
    increment = sinon.spy();
    decrement = sinon.spy();
		component = renderComponent(Counter, {
      increment,
      decrement,
      counter: { count: 1 }
    });
	});

  it('Renders with correct style', () => {
    const s = require('./style.css');
    expect(component.find(s.counter)).to.exist;
  });

  it('Renders header', () => {
    expect(component.find('h4').text()).to.eql('Counter Example');
  });

  it('Renders Increment and Decrement buttons', () => {
    expect(component.find('button')).to.have.length(2);
  });

  it('Renders counter value', () => {
    expect(component.find('p').text()).to.eql('1');
  });

  it('Calls the increment', () => {
    expect(component.find({name:'incBtn'})).to.exist;
    component.find({name:'incBtn'}).simulate('click');
    expect(increment.calledOnce).to.equal(true);
  });

  it('Calls the decrement', () => {
    expect(component.find({name:'decBtn'})).to.exist;
    component.find({name:'decBtn'}).simulate('click');
    expect(decrement.calledOnce).to.equal(true);
  });

});
