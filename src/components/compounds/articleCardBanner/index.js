import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './style.css';

const style = image => ({
  background: `linear-gradient(to bottom, transparent, transparent, #000000), url('${image}')`
});

const descriptionStyle = () => ({
  display: 'block',
});

class ArticleCardBanner extends Component {
  state = {
    hover: false,
  }

  clearStyle = () => {
    this.setState({
      hover: true
    });
  };

  returnStyle = () => {
    this.setState({
      hover: false
    });
  };

  render() {
    const { hover } = this.state;
    const { item } = this.props;
    return (
      <div
        id="article-card-banner"
        className={classes.ArticleCard__banner}
        style={hover ? {} : style(item.banner)}
        onMouseEnter={this.clearStyle}
        onMouseLeave={this.returnStyle}
      >
        <div className={classes.ArticleCard__BannerContent}>
          <h3 className={classes.ArticleCard__BannerTitle}>
            {item.title}
          </h3>
          <p
            className={classes.ArticleCard__BannerDescription}
            style={!hover ? {} : descriptionStyle()}
          >
            {item.description}
          </p>
          <p className={classes.ArticleCard__date}>
            {item.date}
          </p>
        </div>
      </div>
    );
  }
}

ArticleCardBanner.propTypes = {
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

export default ArticleCardBanner;
