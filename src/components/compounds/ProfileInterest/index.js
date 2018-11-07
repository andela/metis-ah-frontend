import React from 'react'
import PropTypes from 'prop-types';
import uuid from 'uuid';

const loadInterests = interests => interests.map(
  interest => (
    <button type="button" className="btn btn-default btn--tag FontSize--18" title={interest} key={uuid()}>
      {interest}
    </button>
  )
);
const Interests = ({ interests }) => (
  <div className="ProfileInterest">
    <div className="ProfileInterest__title">
    Interests
    </div>
    <div className="ProfileInterest__tags">
      {
        interests
          ? loadInterests(interests)
          : 'None added'
      }
    </div>
  </div>
);

Interests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Interests;
