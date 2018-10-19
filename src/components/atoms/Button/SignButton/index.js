import React from 'react';

const Button = ({ children, ...props }) => (
  <button type="submit" {...props}>
    {children}
  </button>
);

export default Button;
