import React from 'react';

import FooterCategories from 'Components/compounds/footerCategories';
import FooterBrand from 'Components/compounds/footerBrand';
import './style.scss';

const footer = () => (
  <footer className="Main-Footer">
    <FooterCategories />
    <FooterBrand />
  </footer>
);

export default footer;
