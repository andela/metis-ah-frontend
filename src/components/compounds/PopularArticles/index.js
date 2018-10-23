import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import PopularCards from 'Components/compounds/PopularCards';
import updatePopularArticlesAction from '../../../store/actions/popularArticlesAction';
import './style.scss';

class Popular extends React.Component {
  componentDidMount() {
    const { updatePopularArticles } = this.props;

    updatePopularArticles();
  }

  render() {
    const { popular } = this.props
    return (
      <div className="popular-articles-wrapper">
        <h2 className="heading">POPULAR ON AUTHOR'S HAVEN</h2>
        <div className="Popular-Cards-Wrapper">
          {
            popular.length
              ? <PopularCards popular={popular} />
              : <div className="loader" />
          }
        </div>
      </div>
    );
  }
}

Popular.propTypes = {
  updatePopularArticles: PropTypes.func.isRequired,
  popular: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  popular: state.popularArticles
});

const mapDispatchToProps = dispatch => ({
  updatePopularArticles: () => dispatch(updatePopularArticlesAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
