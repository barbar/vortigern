import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { About } from './index';

describe('<About />', () => {

  const component = renderComponent(About);

  it('Renders with correct style', () => {
    const style = require('./style.css');
    expect(component.find(style.About)).to.exist;
  });

  it('Renders header with text', () => {
    expect(component.find('h4').text()).to.eql('About');
  });

});
