import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopularAuthorsCards from '../PopularAuthorsCards';
import updateAuthors from '../../../store/actions/authorsOfTheWeekAction';

import './style.scss';

class PopularAuthors extends React.Component {
  componentDidMount() {
    const { updateAuthorsAction } = this.props;

    updateAuthorsAction();
  }

  render() {
    const { authors } = this.props;
    return (
      <div className="Popular-Authors-Container">
        <h2 className="title">BEST AUTHORS OF THE WEEK</h2>
        <div className="Popular-Authors-Wrapper">
          <div className="Popular-Authors">
            {authors.length ? (
              <PopularAuthorsCards authors={authors} />
            ) : (
              <div className="loader" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

PopularAuthors.propTypes = {
  updateAuthorsAction: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  authors: state.popularAuthors
});

const mapDispatchToProps = dispatch => ({
  updateAuthorsAction: () => dispatch(updateAuthors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularAuthors);
