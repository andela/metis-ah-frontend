import React from 'react';

import Categories from 'Components/compounds/categories';
import classes from './style.css';

const minorNav = () => (
  <nav className={`${classes.categories}`} role="navigation" aria-label="categories navigation">
    <div className={`${classes.container} container`}>
      <Categories />
    </div>
  </nav>
);

export default minorNav;
