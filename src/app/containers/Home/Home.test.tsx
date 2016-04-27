import { expect, renderComponent } from '../../helpers/TestHelper';

import Home from './Home';

describe('Home', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('Renders with correct style', () => {
    const s = require('./style.css');
    expect(component).to.have.class(s.home);
  });

  it('Renders Barbar Logo', () => {
    const img = require('./bb.png');
    expect(component.find('img')).to.exist;
    expect(component.find('img')[0].src).to.equal('http://localhost:9876' + img);
  });

  it('Has a p element that says Hellp!', () => {
    expect(component.find('p')).to.have.text('Hello!');
  });

});