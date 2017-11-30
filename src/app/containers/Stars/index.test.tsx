import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Stars } from './index';

// import log from 'log';

const sinon = require('sinon');

/** Mock App. State */
const state: {
  stars: {
    count: number;
    isFetching: boolean;
  },
} = {
  stars: {
    count: 61,
    isFetching: false,
  },
};

describe('<Stars />', () => {

  it('Renders with correct style', () => {
    const style = require('./style.css');
    const component = renderComponent(Stars, state);
    expect(component.find(style.Stars)).to.exist;
  });

  it('Renders header', () => {
    const promise = Promise.resolve(state);
    sinon.stub(global, 'fetch').callsFake(() => promise);

    const component = renderComponent(Stars, state);
    return promise.then(() => {
      setTimeout(component.update, 3000);
    }).then(() => {
      expect(component.find('div').text()).to.eql(`${state.stars.count}`);
    });
    // return new Promise(async (resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 4000);
    // }).then(() => {
    //   expect(component.find('div').text()).to.eql('512');
    // });
  });

});
