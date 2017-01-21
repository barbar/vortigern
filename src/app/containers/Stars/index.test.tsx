import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Stars } from './index';

/** Mock App. State */
const state: Object = {
  stars: {
    count: 61,
    isFetching: false,
  },
};

describe('<Counter />', () => {

  const component = renderComponent(Stars, state);

  it('Renders with correct style', () => {
    const s = require('./style.css');
    expect(component.find(s.stars)).to.exist;
  });

  it('Renders header', () => {
    expect(component.find('div').text()).to.eql('61');
  });

});
