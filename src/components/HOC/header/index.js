import React, { Component } from 'react';

// Components
import Hero from 'Components/compounds/hero';
import CategoriesNav from 'Components/compounds/categoriesNav';
import SearchAndProfile from 'Components/compounds/searchAndProfile';
import BrandContainer from 'Components/compounds/brandContainer';
import classes from './style.css';

class Header extends Component {
  state = {
    menu: false,
  };

  showMenu = () => {
    this.setState(state => ({
      menu: !state.menu,
    }));
  }

  render() {
    const { menu } = this.state;

    return (
      <header>
        <nav className={`navbar container ${classes.major}`} role="navigation" aria-label="main navigation">
          <BrandContainer showMenu={this.showMenu} menu={menu} />
          <SearchAndProfile menu={menu} />
        </nav>
        <Hero />
        <CategoriesNav />
      </header>
    );
  }
}

export default Header;
