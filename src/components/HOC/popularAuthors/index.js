import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopularAuthorsCards from 'Components/compounds/PopularAuthorsCards';

import './style.scss';

const PopularAuthors = (props) => {
  const { popularAuths } = props;
  return (
    <div className="Popular-Authors-Container">
      <h2 className="title">BEST AUTHORS OF THE WEEK</h2>
      <div className="Popular-Authors">
        <PopularAuthorsCards popular={popularAuths} />
      </div>
    </div>
  );
};

PopularAuthors.propTypes = {
  popularAuths: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  popularAuths: state.popularAuthors.popularAuthors,
});

export default connect(mapStateToProps)(PopularAuthors);
