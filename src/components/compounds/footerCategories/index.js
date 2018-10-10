import React from 'react';

import Categories from 'Components/compounds/categories';
import './style.scss';

const Footer = () => (
  <div className="footer-nav-categories">
    <div className="container container">
      <Categories footer />
    </div>
  </div>
);

export default Footer;
