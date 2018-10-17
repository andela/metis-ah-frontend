import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const computeLikes = (likes) => {
  if (likes >= 1000) {
    let num = likes / 1000;
    num = num.toString();
    num += 'K';

    return num;
  }
};

const ArticleCardFooter = (props) => {
  const { item } = props;
  return (
    <div className="ArticleCard__footer">
      <div className="ArticleCard__FooterThumbnail">
        <img src={item.authorImg} alt="Article author" />
      </div>
      <div className="ArticleCard__FooterName">
        {item.author}
      </div>
      <div className="ArticleCard__FooterLikes">
        <i className="fas fa-thumbs-up fa-2x" />
        <span>{computeLikes(item.likes)}</span>
      </div>
    </div>
  );
};

ArticleCardFooter.propTypes = {
  item: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCardFooter;
