import * as React from 'react'
import SomeComponent from '../../containers/someComponent/someComponentContainer.ts'

interface IProps {

}

export default class <%= pascalEntityName %>View extends React.Component<IProps, {}> {
  public render() {
    return(
      <SomeComponent />
    )
  }
}
