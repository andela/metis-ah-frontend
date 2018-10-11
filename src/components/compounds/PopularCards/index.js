import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticleCardBanner from 'Components/compounds/ArticleCardBanner';
import ArticleCardFooter from 'Components/compounds/ArticleCardFooter';
import './style.scss';

class PopularCard extends Component {
  render() {
    const { popular } = this.props;
    return (
      popular.map(item => (
        <div key={item.title} className="Popular-ArticleCard">
          <ArticleCardBanner item={item} />
          <ArticleCardFooter item={item} />
        </div>
      ))
    );
  }
}

PopularCard.propTypes = {
  popular: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  popular: state.popularArticles.popularArticles
});

export default connect(mapStateToProps)(PopularCard);
