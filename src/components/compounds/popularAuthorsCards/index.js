import React from 'react';

const convertLikes = (likes) => {
  if (likes >= 1000) {
    let num = likes / 1000;
    num = num.toString();
    num += 'K';

    return num;
  }
};

const popularAuthorsCards = props => (
  props.popular.map(item => (
    <div key={item.name} className="Popular-Authors-Card">
      <img src={item.image} alt="Author" className="image" />
      <p className="name">{item.name.toUpperCase()}</p>
      <p className="likes">{`${convertLikes(item.likes)} Likes this week`}</p>
    </div>
  ))
);

export default popularAuthorsCards;
