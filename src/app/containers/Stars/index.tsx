import { IStars } from 'models/stars';
import * as React from 'react';

import { IStore } from 'redux/IStore';

// import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { getStars } from 'redux/modules/stars';

const style = require('./style.css');

interface IProps {
  stars: IStars;
  getStars: any;
}

// @asyncConnect([{
//   promise: ({ store: { dispatch } }) => {
//     return dispatch(getStars());
//   },
// }])
// @connect(
//   (state: IStore) => ({ stars: state.stars }),
//   (dispatch) => ({
//     getStars: () => dispatch(getStars()),
//   }),
// )
class StarsComponent extends React.Component<IProps, {}> {
  public state = {
    isReady: false,
  };
  public componentDidMount() {
    this.fetch();
  }
  public async fetch() {
    await this.props.getStars();
    this.setState({isReady: true});
  }
  public render() {
    const { stars } = this.props;
    return (
      <div className={style.Stars}>
        {stars.isFetching ? 'Fetching Stars' : stars.count}
      </div>
    );
  }
}

const Stars = connect(
  (state: IStore) => ({ stars: state.stars }),
  (dispatch) => ({
    getStars: () => dispatch(getStars()),
  }),
)(StarsComponent);

export { Stars };
