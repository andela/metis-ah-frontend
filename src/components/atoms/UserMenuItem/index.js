import React from 'react';

import './style.scss';

const UserMenuItem = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
);

UserMenuItem.defaultProps = {
  className: 'profile__menu__item',
};

export default UserMenuItem;
