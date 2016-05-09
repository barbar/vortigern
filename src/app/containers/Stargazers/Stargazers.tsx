import * as React from 'react';
import { connect } from 'react-redux';
import { getStargazers } from '../../redux/modules/stargazers/stargazers';
import { IStarGazers } from '../../redux/modules/stargazers/stargazers.model';

interface IProps {
  stargazers: IStarGazers;
  getStargazers: Redux.ActionCreator;
}

function mapStateToProps(state: any) {
  return {
    stargazers: state.stargazers
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch) {
  return {
    getStargazers: () => dispatch(getStargazers())
  };
}

export class Stargazers extends React.Component<IProps, void> {

  render() {
    const { getStargazers, stargazers } = this.props;
    return (
      <div>
        <h4>Stargazers Example</h4>
        <button onClick={getStargazers}>
          GET STARGAZERS!
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stargazers);
