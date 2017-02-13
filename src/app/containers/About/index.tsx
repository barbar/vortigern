import * as React from 'react';
import SampleForm from 'components/SampleForm';
const style = require('./style.css');

class About extends React.Component<any, any> {
  private handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  public render() {
    return (
      <div className={style.About}>
        <h4>About</h4>
          <SampleForm.test onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export { About }
