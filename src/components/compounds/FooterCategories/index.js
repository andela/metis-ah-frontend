import React from 'react';

import Categories from 'Components/compounds/Categories';
import './style.scss';

const Footer = () => (
  <div className="footer-nav-categories">
    <div className="container container">
      <Categories footer />
    </div>
  </div>
);

export default Footer;
