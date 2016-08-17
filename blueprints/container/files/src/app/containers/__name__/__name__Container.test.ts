import { expect } from 'chai'
import { renderSmartComponent } from '../../helpers/TestHelper'
import <%= pascalEntityName %> from './<%= camelEntityName %>Container.ts'

// use this to mock an ajax call
// import {fetchMock} from '../../helpers/TestHelper.tsx'

// Example responses
// import githubMock from '../../mocks/githubData'

/** Mock App. State */
const defaultState: Object = {
  // Mock of the global state
  stars: {
    count: 0,
    isFetching: false,
  },
}

describe('<<%= pascalEntityName %>Container />', () => {
  let component: Enzyme.ReactWrapper<any, any>

  beforeEach(() => {
    component = renderSmartComponent(<%= pascalEntityName %>, defaultState)
  })
  // Async example from the stars smart component
  it('Renders <%= pascalEntityName %>', (done) => {
    fetchMock.mock('https://api.github.com/repos/barbar/vortigern', githubMock.succuess)
    const component = renderSmartComponent(<%= pascalEntityName %>, defaultState)

    // 20 ms timeout is here, because the component depends on an ajax call in the component will mount.
    // So it won't look this way until after the mock is returned.
    setTimeout(() => {
      expect(component.find('p').text()).to.equal(`${githubMock.succuess.body.stargazers_count}`)
      done()
    }, 20)
  })
  // Sync examples from the counter component
   it('Calls the increment', () => {
    expect(component.find({ name: 'incBtn' })).to.exist
    component.find({ name: 'incBtn' }).simulate('click')
    expect(component.find('p').text()).to.eql('1')
  })

  it('Calls the decrement', () => {
    expect(component.find({ name: 'decBtn' })).to.exist
    component.find({ name: 'decBtn' }).simulate('click')
    expect(component.find('p').text()).to.eql('0')
  })
})
