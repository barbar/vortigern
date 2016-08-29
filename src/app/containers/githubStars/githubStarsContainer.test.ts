import { expect } from 'chai'
import { renderSmartComponent } from '../../helpers/TestHelper'
import GithubStars from './githubStarsContainer.ts'
import {fetchMock} from '../../helpers/TestHelper.tsx'
import githubMock from '../../mocks/githubData'
/** Mock App. State */
const defaultState: Object = {
  stars: {
    count: 0,
    isFetching: false,
  },
}

describe('<GithubStars />', () => {
  it('Renders GithubStars', (done) => {
    fetchMock.mock('https://api.github.com/repos/barbar/vortigern', githubMock.succuess)
    const component = renderSmartComponent(GithubStars, defaultState)
    setTimeout(() => {
      expect(component.find('p').text()).to.equal(`${githubMock.succuess.body.stargazers_count}`)
      done()
    }, 20)
  })
})
