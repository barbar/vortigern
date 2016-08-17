import { expect } from 'chai'
import { renderComponent } from '../../helpers/TestHelper'
import <%= pascalEntityName %> from './<%= camelEntityName %>Component'
import * as Enzyme from 'enzyme'

/** Mock App. State */
const props: Object = {
   count: 1
}

describe('<<%= pascalEntityName %> />', () => {

  let component: Enzyme.ReactWrapper<any, any>

  beforeEach(() => {
    component = renderComponent(<%= pascalEntityName %>, props)
  })

  it('Renders with correct style', () => {
    const s = require('./<%= camelEntityName %>Component.css')
    expect(component.find(s.<%= camelEntityName %>)).to.exist
  })

  it('Renders header', () => {
    expect(component.find('h4').text()).to.eql('<%= pascalEntityName %> Example')
  })

  it('Renders Increment and Decrement buttons', () => {
    expect(component.find('button')).to.have.length(2)
  })

  it('Renders <%= camelEntityName %> value', () => {
    expect(component.find('p').text()).to.eql('0')
  })

})
