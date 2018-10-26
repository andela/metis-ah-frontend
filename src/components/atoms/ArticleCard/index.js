import React from 'react';
import PropTypes from 'prop-types';
import timeFormat from 'time_past';
import './style.scss';

const ArticleCard = ({
  title, description, name, time, img
}) => (
  <div className="articleCard-container">
    <div className="columns articleCard">
      <div className="column is-one-fifth padding__0">
        <img src={img} alt="" className="articleCard__img" />
      </div>
      <div className="column padding__0 articleCard__content">
        <h2 className="articleCard__title">{title}</h2>
        <p className="articleCard__subtitle">{description}</p>
        <p className="articleCard__name">{name}</p>
        <p className="articleCard__time">{timeFormat(time)}</p>
      </div>
    </div>
  </div>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default ArticleCard;
