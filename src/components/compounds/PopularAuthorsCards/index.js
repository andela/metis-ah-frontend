import React from 'react';
import convertLikes from '../../util/convertLikes';

const PopularAuthorsCards = props => (
  props.authors.map(item => (
    <div key={item.id} className="Popular-Authors-Card">
      <img src={item.image} alt="Author" className="image" />
      <p className="name">{`${item.firstname} ${item.lastname}`}</p>
      <p className="likes">{`${convertLikes(item.likesCount)} Likes this week`}</p>
    </div>
  ))
);

export default PopularAuthorsCards;
