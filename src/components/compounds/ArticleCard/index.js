import React from 'react';
import PropTypes from 'prop-types';
import { dayHelper, monthHelper } from '../../util/date';

const ArticleCard = ({
  article, image, firstname, lastname,
}) => {
  const {
    title, createdAt, description, imageUrl, ratings
  } = article;
  return (
    <div className="column is-one-third">
      <div className="ArticleCard">
        <div
          className="ArticleCard__banner"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, #000000),url(${imageUrl})`
          }}
        >
          <div className="ArticleCard__BannerContent">
            <h1 className="ArticleCard__BannerTitle">
              {title}
            </h1>
            <p className="ArticleCard__date">
              {monthHelper(createdAt)}
              {' '}
              {dayHelper(createdAt)}
            </p>
          </div>
          <div className="ArticleCard__overlay is-overlay">
            <div className="ArticleCard__OverlayContent">
              <h1 className="ArticleCard__OverlayTitle">{title}</h1>
              <p className="ArticleCard__OverlayText">
                {description}
              </p>
              <p className="ArticleCard__OverlayDate">
                {monthHelper(createdAt)}
                {' '}
                {dayHelper(createdAt)}
              </p>
            </div>
          </div>
        </div>
        <div className="ArticleCard__footer">
          <div className="columns is-mobile">
            <div className="column is-one-fifth PaddingRight--0 Margin--auto">
              <div className="ArticleCard__FooterThumbnail">
                <img src={image} alt="Article author" />
              </div>
            </div>
            <div className="column is-paddingless Margin--auto is-three-fifths">
              <div className="ArticleCard__FooterName">
                {firstname}
                {' '}
                {lastname}
              </div>
            </div>
            <div className="column Margin--auto is-paddingless">
              <div className="ArticleCard__FooterLikes">
                <i className="fas fa-thumbs-up fa-2x" />
                <span>{ratings || 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

ArticleCard.propTypes = {
  article: PropTypes.objectOf(PropTypes.any).isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArticleCard;
