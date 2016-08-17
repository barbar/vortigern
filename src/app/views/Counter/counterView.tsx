import * as React from 'react'
import CounterContainer from '../../containers/counter/counterContainer.ts'

interface IProps {

}

export default class CounterView extends React.Component<IProps, {}> {
  public render() {
    return(
      <CounterContainer />
    )
  }
}
