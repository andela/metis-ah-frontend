import React from 'react';

// Components
import Hero from 'Components/compounds/Hero';
import CategoriesNav from 'Components/compounds/CategoriesNav';
import './style.scss';
import NavbarTop from 'Components/compounds/NavbarTop';

const Header = () => (
  <header>
    <NavbarTop />
    <Hero />
    <CategoriesNav />
  </header>
);

export default Header;
