import * as React from 'react';
import { connect } from 'react-redux';
import { getStars } from '../../redux/modules/stars/stars';
import { IStars } from '../../redux/modules/stars/stars.model';

interface IProps {
  stars: IStars;
  getStars: Redux.ActionCreator;
}

function mapStateToProps(state: any) {
  return {
    stars: state.stars
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch) {
  return {
    getStars: () => dispatch(getStars())
  };
}

class Async extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.getStars();
  }

  render() {
    const { stars } = this.props;

    return(
      <div>
        { stars.isFetching ? 'Fetching Stars' : stars.count }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Async);
