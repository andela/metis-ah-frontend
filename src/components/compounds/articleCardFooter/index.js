import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.css';

const computeLikes = (likes) => {
  if (likes >= 1000) {
    let num = likes / 1000;
    num = num.toString();
    num += 'K';

    return num;
  }
};

const articleCardFooter = (props) => {
  const { item } = props;
  return (
    <div className={classes.ArticleCard__footer}>
      <div className="columns">
        <div className="column is-one-fifth PaddingRight--0 Margin--auto">
          <div className={classes.ArticleCard__FooterThumbnail}>
            <img src={item.authorImg} alt="Article author" />
          </div>
        </div>
        <div className={`column is-paddingless ${classes.Margin__Auto} is-three-fifths`}>
          <div className={classes.ArticleCard__FooterName}>
            {item.author}
          </div>
        </div>
        <div className={`column ${classes.Margin__Auto} is-paddingless`}>
          <div className={classes.ArticleCard__FooterLikes}>
            <i className="fas fa-thumbs-up fa-2x" />
            <span>{computeLikes(item.likes)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

articleCardFooter.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    banner: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default articleCardFooter;
