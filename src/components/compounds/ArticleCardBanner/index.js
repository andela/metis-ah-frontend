import React, { Component } from 'react';
import PropTypes from 'prop-types';
import timePast from 'time_past';
import { withRouter } from 'react-router-dom';
import './style.scss';

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
    const { item, history } = this.props;

    return (
      <div
        className="ArticleCard__banner article-card-banner"
        style={hover ? {} : style(item.imageUrl)}
        onMouseEnter={this.clearStyle}
        onMouseLeave={this.returnStyle}
        onClick={() => history.push(`/articles/${item.id}/view`)}
      >
        <div className="ArticleCard__BannerContent">
          <h3 className="ArticleCard__BannerTitle">
            {item.title}
          </h3>
          <p
            className="ArticleCard__BannerDescription"
            style={!hover ? {} : descriptionStyle()}
          >
            {item.description}
          </p>
          <p className="ArticleCard__date">
            {timePast(item.createdAt)}
          </p>
        </div>
      </div>
    );
  }
}

ArticleCardBanner.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,    
    createdAt: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
  }),
};

ArticleCardBanner.defaultProps = {
  item: {
    description: ''
  }
};

export default withRouter(ArticleCardBanner);
