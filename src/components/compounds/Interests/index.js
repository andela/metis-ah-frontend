import React from 'react';
import Interest from 'Components/atoms/Interest';

const Interests = ({ categories }) => (
  categories.map(item => (
    <Interest
      key={item.id}
      className={item.selected ? 'selected' : 'not-selected'}
    >
      {item.name}
    </Interest>
  ))
);

export default Interests;
