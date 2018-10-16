import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({
  children,
  color = 'white',
  className = '',
  ...props
}) => (
  <button {...props} type="button" className={`App__Button ${color} ${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Button;
