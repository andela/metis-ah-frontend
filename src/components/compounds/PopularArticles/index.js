import React from 'react';
import { Link } from 'react-router-dom';

import PopularCards from 'Components/compounds/PopularCards';
import './style.scss';

const Popular = () => (
  <div className="popular-articles-wrapper">
    <h2 className="heading">POPULAR ON AUTHOR'S HAVEN</h2>
    <div className="Popular-Cards-Wrapper">
      <PopularCards />
    </div>
    <div className="more">
      <Link className="more-popular" to="/">
        <span>SEE ALL POPULAR</span>
        <i className="fas fa-chevron-right right" />
      </Link>
    </div>
  </div>
);

export default Popular;
