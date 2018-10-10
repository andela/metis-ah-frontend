import React from 'react';

import FeaturedCards from 'Components/compounds/featuredCards';
import classes from './style.css';

const featuredArticles = () => (
  <div className={classes.wrapper}>
    <FeaturedCards />
    <div className={classes.more}>
      <span>SEE ALL FEATURED</span>
      <i className={`fas fa-chevron-right ${classes.right}`} />
    </div>
  </div>
);

export default featuredArticles;
