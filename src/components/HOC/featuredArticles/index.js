import React from 'react';
import { Link } from 'react-router-dom';

import FeaturedCards from 'Components/compounds/featuredCards';
import './style.scss';

const featuredArticles = () => (
  <div className="Featured-ArticlesWrapper">
    <FeaturedCards />
    <Link className="more" to="/">
      <span>SEE ALL FEATURED</span>
      <i className="fas fa-chevron-right right" />
    </Link>
  </div>
);

export default featuredArticles;
