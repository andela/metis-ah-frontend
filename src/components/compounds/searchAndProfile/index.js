import React, { Component } from 'react';

import ProfileNav from 'Components/compounds/profileNav';
import Search from 'Components/atoms/search';
import classes from './style.css';

const SearchAndProfile = (props) => {
  const { menu } = props;
  return (
    <div id="profile-nav" className={`navbar-menu ${menu ? classes.isActive : ''} ${classes.block}`}>
      <Search />
      <div className="navbar-end">
        <div className="navbar-item">
          <ProfileNav />
        </div>
      </div>
    </div>
  );
};

export default SearchAndProfile;
