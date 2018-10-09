import React from 'react';

import FooterCategories from 'Components/compounds/footerCategories';
import FooterBrand from 'Components/compounds/footerBrand';
import classes from './style.css';

const footer = () => (
  <footer className={classes.footer}>
    <FooterCategories />
    <FooterBrand />
  </footer>
);

export default footer;
