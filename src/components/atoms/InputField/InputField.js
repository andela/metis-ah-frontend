import React from 'react';

const input = ({ name, label, ...props }) => (
  <label htmlFor={name}>
    {label}
    <input name={name} {...props} />
  </label>
);
export default input;
