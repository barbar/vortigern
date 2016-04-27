import { expect, renderComponent } from '../../helpers/TestHelper';

import Home from './Home';

describe('Home', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('Has h1 tag that says Home', () => {
    expect(component.find('h1')).to.have.text('Home');
  });

  it('Has right class', () => {
		const s = require('./style.css');
    expect(component).to.have.class(s.home);
  });

});