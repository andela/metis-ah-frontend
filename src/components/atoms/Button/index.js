import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Button = ({
  children,
  color = 'white',
  className = '',
  onClick,
  ...props
}) => (
  <button {...props} type="button" className={`App__Button ${color} ${className}`} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
