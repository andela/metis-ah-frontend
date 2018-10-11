import React from 'react';
import PropTypes from 'prop-types';

import ProfileNav from 'Components/compounds/ProfileNav';
import Search from 'Components/atoms/Search';
import './style.scss';

const SearchAndProfile = (props) => {
  const { menu } = props;
  return (
    <div id="profile-nav" className={`navbar-menu ${menu ? 'SearchAndProfile-isActive' : ''} 'block'`}>
      <Search />
      <div className="navbar-end">
        <div className="navbar-item">
          <ProfileNav />
        </div>
      </div>
    </div>
  );
};

SearchAndProfile.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default SearchAndProfile;
