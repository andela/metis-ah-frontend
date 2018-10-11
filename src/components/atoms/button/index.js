import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = (props) => {
  const { text, green } = props;
  return (
    <button type="button" className={`App__Button ${green ? 'green' : 'white'} `}>
      {text}
    </button>
  );
};

Button.propTypes = {
  green: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  green: false,
};

export default Button;
