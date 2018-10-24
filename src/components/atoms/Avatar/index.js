import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Avatar = props => (
  <img {...props} alt="avatar" />
);
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};

Avatar.defaultProps = {
  className: 'atom__avatar',
};

export default Avatar;
