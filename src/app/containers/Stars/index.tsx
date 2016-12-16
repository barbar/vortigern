import * as React from 'react';
import { getStars } from 'modules/stars';
import { IStars, IStarsAction } from 'models/stars';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  stars: IStars;
  getStars: Redux.ActionCreator<IStarsAction>;
}

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    return dispatch(getStars());
  },
}])
@connect(
  state => ({ stars: state.stars })
)
class Stars extends React.Component<IProps, {}> {

  public render() {
    const { stars } = this.props;

    return (
      <div>
        {stars.isFetching ? 'Fetching Stars' : stars.count}
      </div>
    );
  }
}

export { Stars }
