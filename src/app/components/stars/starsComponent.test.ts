import { expect } from 'chai'
import { renderComponent } from '../../helpers/TestHelper'
import Stars from './starsComponent.tsx'

/** Mock App. Props */
const props: Object = {
  count: 61,
  isFetching: false
}

describe('<Stars />', () => {

  const component = renderComponent(Stars, props)

  it('Renders with correct style', () => {
    expect(component).to.exist
  })
  it('Renders the h1', () => {
    expect(component.find('h1').text()).to.eql('Default header')
  })
  it('Renders count', () => {
    const s = require('./starsComponent.css')
    expect(component.find(`.${s.count}`).text()).to.eql('61')
  })
})
