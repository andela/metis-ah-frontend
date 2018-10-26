import React from 'react';
import PropTypes from 'prop-types';


const InputField = ({ name, label, ...props }) => (
  <label htmlFor={name}>
    {label}
    <input name={name} {...props} />
  </label>
);

InputField.defaultProps = {
  label: '',
  name: '',
};

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default InputField;
