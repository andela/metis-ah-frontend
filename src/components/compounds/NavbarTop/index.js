import React, { Component } from 'react';

// Components
import SearchAndProfile from 'Components/compounds/SearchAndProfile';
import BrandContainer from 'Components/compounds/BrandContainer';

class NavbarTop extends Component {
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
      <nav className="navbar container Landing-Page-Header" role="navigation" aria-label="main navigation">
        <BrandContainer showMenu={this.showMenu} menu={menu} />
        <SearchAndProfile menu={menu} />
      </nav>
    );
  }
}

export default NavbarTop;
