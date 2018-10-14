import React from 'react';
import PropTypes from 'prop-types';
import convertLikes from '../../util/convertLikes';

import './style.scss';

const ArticleCardFooter = (props) => {
  const { item } = props;

  return (
    <div className="ArticleCard__footer">
      <div className="ArticleCard__FooterThumbnail">
        <img src={item.image} alt="Article author" />
      </div>
      <div className="ArticleCard__FooterName">
        {`${item.firstname} ${item.lastname}`}
      </div>
      <div className="ArticleCard__FooterLikes">
        <i className="fas fa-thumbs-up fa-2x" />
        <span>{convertLikes(item.likesCount)}</span>
      </div>
    </div>
  );
};

ArticleCardFooter.propTypes = {
  item: PropTypes.shape({
    likesCount: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCardFooter;
