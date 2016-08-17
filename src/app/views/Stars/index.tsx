import * as React from 'react'
import GithubStars from '../../containers/githubStars/githubStarsContainer.ts'

interface IProps {

}

export default class Stars extends React.Component<IProps, {}> {
  public render() {
    return(
      <GithubStars header={'This is not the default header'} />
    )
  }
}
