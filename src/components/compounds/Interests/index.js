import React from 'react';
import Interest from 'Components/atoms/Interest';

const Interests = ({ categories, click }) => (
  categories.map((item, index) => {
    return (
      <Interest
        key={item.id}
        index={index}
        click={click}
      >
        {item.name}
      </Interest>
    );
  })
);

export default Interests;
