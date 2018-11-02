import React from 'react';

// Components
import Hero from 'Components/compounds/Hero';
import CategoriesNav from 'Components/compounds/CategoriesNav';
import NavbarTop from 'Components/compounds/Navbar';

const Header = () => (
  <header>
    <NavbarTop />
    <Hero />
    <CategoriesNav />
  </header>
);
export default Header;
