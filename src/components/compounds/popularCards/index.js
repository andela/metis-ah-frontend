import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticleCardBanner from 'Components/compounds/articleCardBanner';
import ArticleCardFooter from 'Components/compounds/articleCardFooter';
import classes from './style.css';

class PopularCard extends Component {
  render() {
    const { popular } = this.props;
    return (
      popular.map(item => (
        <div key={item.title} className="column is-one-third">
          <div className={classes.ArticleCard}>
            <ArticleCardBanner item={item} />
            <ArticleCardFooter item={item} />
          </div>
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
