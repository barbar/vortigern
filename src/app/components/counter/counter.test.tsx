import { expect } from 'chai'
import { renderComponent } from '../../helpers/TestHelper'
import { Counter } from './counterComponent'
import * as Enzyme from 'enzyme'

/** Mock App. State */
const props: Object = {
   count: 1
}

describe('<Counter />', () => {

  let component: Enzyme.ReactWrapper<any, any>

  beforeEach(() => {
    component = renderComponent(Counter, props)
  })

  it('Renders with correct style', () => {
    const s = require('./counterComponent.css')
    expect(component.find(s.counter)).to.exist
  })

  it('Renders header', () => {
    expect(component.find('h4').text()).to.eql('Counter Example')
  })

  it('Renders Increment and Decrement buttons', () => {
    expect(component.find('button')).to.have.length(2)
  })

  it('Renders counter value', () => {
    expect(component.find('p').text()).to.eql('1')
  })

})
