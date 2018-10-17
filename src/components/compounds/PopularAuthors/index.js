import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopularAuthorsCards from 'Components/compounds/PopularAuthorsCards';

import './style.scss';

const PopularAuthors = (props) => {
  const { authors } = props;
  return (
    <div className="Popular-Authors-Container">
      <h2 className="title">BEST AUTHORS OF THE WEEK</h2>
      <div className="Popular-Authors">
        <PopularAuthorsCards popular={authors} />
      </div>
    </div>
  );
};

PopularAuthors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  authors: state.popularAuthors.popularAuthors,
});

export default connect(mapStateToProps)(PopularAuthors);
