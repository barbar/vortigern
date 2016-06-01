import { expect } from 'chai';
import { renderComponent } from '../../helpers/TestHelper';
import { About } from './About';

describe('<About />', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(About);
  });

  it('Renders with correct style', () => {
    const s = require('./style.css');
    expect(component.find(s.about)).to.exist;
  });
  
  it('Renders header with text', () => {
    expect(component.find('h4').text()).to.eql('About');
  });

});
