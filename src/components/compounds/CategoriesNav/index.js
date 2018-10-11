import React from 'react';

import Categories from 'Components/compounds/Categories';
import './style.scss';

const MinorNav = () => (
  <nav className="nav-Categories" role="navigation" aria-label="categories navigation">
    <div className="Categories-container container">
      <Categories />
    </div>
  </nav>
);

export default MinorNav;
