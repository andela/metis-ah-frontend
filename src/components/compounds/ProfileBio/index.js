import React from 'react';
import PropTypes from 'prop-types';

const ProfileBio = ({ bio }) => (
  <div className="ProfileBio">
    <div className="ProfileBio__title">
      Bio
    </div>
    <div className="ProfileBio__content">
      <p>{ bio || 'Nothing here' }</p>
    </div>
  </div>
);

ProfileBio.propTypes = {
  bio: PropTypes.string.isRequired
};

export default ProfileBio;
