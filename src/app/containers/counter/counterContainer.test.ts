import { expect } from 'chai'
import { renderSmartComponent } from '../../helpers/TestHelper'
import CounterContainer from './counterContainer'
import {IState} from '../../redux/reducers'
import * as Enzyme from 'enzyme'

/** Mock App. State */
const props: IState = {
  counter: {
    count: 10
  }
}

describe('<CounterContainer />', () => {

  let component: Enzyme.ReactWrapper<any, any>

  beforeEach(() => {
    component = renderSmartComponent(CounterContainer, props)
  })

  it('Renders Increment and Decrement buttons', () => {
    expect(component.find('button')).to.have.length(2)
  })

  it('Renders counter value', () => {
    expect(component.find('p').text()).to.eql('10')
  })

  it('Calls the increment', () => {
    expect(component.find({ name: 'incBtn' })).to.exist
    component.find({ name: 'incBtn' }).simulate('click')
    expect(component.find('p').text()).to.eql('11')
  })

  it('Calls the decrement', () => {
    expect(component.find({ name: 'decBtn' })).to.exist
    component.find({ name: 'decBtn' }).simulate('click')
    expect(component.find('p').text()).to.eql('9')
  })

})
