import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Stars } from './index';

/** Mock App. State */
const state: object = {
  stars: {
    count: 61,
    isFetching: false,
  },
};

describe('<Counter />', () => {

  const component = renderComponent(Stars, state);

  it('Renders with correct style', () => {
    const style = require('./style.css');
    expect(component.find(style.Stars)).to.exist;
  });

  it('Renders header', () => {
    expect(component.find('div').text()).to.eql('61');
  });

});
