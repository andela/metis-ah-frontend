import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = (props) => {
  const { text } = props;
  return (
    <button type="button" className="App__Button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
