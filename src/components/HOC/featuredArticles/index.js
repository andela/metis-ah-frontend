import React from 'react';

import FeaturedCards from 'Components/compounds/featuredCards';
import './style.scss';

const featuredArticles = () => (
  <div className="Featured-ArticlesWrapper">
    <FeaturedCards />
    <div className="more">
      <span>SEE ALL FEATURED</span>
      <i className="fas fa-chevron-right right" />
    </div>
  </div>
);

export default featuredArticles;
