import React from 'react';

import FooterCategories from 'Components/compounds/FooterCategories';
import FooterBrand from 'Components/compounds/FooterBrand';
import './style.scss';

const Footer = () => (
  <footer className="Main-Footer">
    <FooterCategories />
    <FooterBrand />
  </footer>
);

export default Footer;
