import React from 'react';

import PopularCards from 'Components/compounds/popularCards';
import './style.scss';

const popular = () => (
  <div className="popular-articles-wrapper">
    <h2 className="heading">POPULAR ON AUTHOR'S HAVEN</h2>
    <div className="columns">
      <PopularCards />
    </div>
    <div className="more">
      <span>SEE ALL POPULAR</span>
      <i className="fas fa-chevron-right right" />
    </div>
  </div>
);

export default popular;
