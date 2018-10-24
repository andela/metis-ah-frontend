import React from 'react';

import './style.scss';

const Interest = ({ children, className, ...props }) => (
  <div {...props} className={`interest ${className}`}>
    {children}
  </div>
);

export default Interest;
