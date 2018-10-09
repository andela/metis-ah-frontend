import React from 'react';

import Categories from 'Components/compounds/categories';
import classes from './style.css';

const Footer = () => (
  <div className={classes.categories}>
    <div className={`${classes.container} container`}>
      <Categories footer />
    </div>
  </div>
);

export default Footer;
