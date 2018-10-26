import React from 'react';
<<<<<<< HEAD
import Interest from 'Components/atoms/Interest';

const Interests = ({ categories, click }) => (
  categories.map((item, index) => {
    return (
      <Interest
        key={item.id}
        index={index}
        click={click}
      >
        {item.name}
      </Interest>
    );
  })
);

=======
import PropTypes from 'prop-types';

const Interests = ({ interests }) => (
  <div className="ProfileInterest">
    <div className="ProfileInterest__title">
    Interests
    </div>
    <div className="ProfileInterest__tags">
      {
        (interests)
          ? interests.map(
            interest => (
              <button type="button" className="btn btn-default btn--tag FontSize--18" title={interest}>
                {interest}
              </button>
            )
          )
          : 'None added'
      }
    </div>
  </div>
);

Interests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};

>>>>>>> feat(users): can view and update their profile
export default Interests;
