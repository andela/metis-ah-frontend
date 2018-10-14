import React from 'react';

import './style.scss';

const FeaturedCards = props => (
  props.featured.map((item, index) => (
    <div
      className={`featCards ${index <= 1 ? 'bigcard' : 'smallcard'}`}
      style={{
        background: `linear-gradient(rgba(19, 180, 122, 0), rgba(19, 180, 122, 0), black), url('${item.imageUrl}'), no-repeat`,
      }}
      key={item.id}
    >
      <div className="info">
        <h3>{item.title}</h3>
        <span>{item.date}</span>
      </div>
    </div>
  ))
);

export default FeaturedCards;
