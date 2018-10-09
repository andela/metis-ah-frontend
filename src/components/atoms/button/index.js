import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.css';

const Button = (props) => {
  const { text } = props;
  return (
    <button type="button" className={`${classes.btn}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
