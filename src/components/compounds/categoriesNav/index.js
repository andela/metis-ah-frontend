import React from 'react';

import Categories from 'Components/compounds/categories';
import './style';

const minorNav = () => (
  <nav className="nav-Categories" role="navigation" aria-label="categories navigation">
    <div className="Categories-container container">
      <Categories />
    </div>
  </nav>
);

export default minorNav;
