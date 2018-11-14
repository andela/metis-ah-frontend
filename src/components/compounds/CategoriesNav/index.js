
import React, { Component } from 'react';

import Categories from 'Components/compounds/Categories';
import './style.scss';

class MinorNav extends Component {
  handleOnClick = () => {
    const a = document.getElementById('js_burger');
    a.classList.toggle('is-active');
    return document.getElementById('js_categoryNav').classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar is-active nav-Categories" role="navigation" aria-label="categories navigation" style={{zIndex: 0}}>
        <div className="navbar-brand">
          <h1 className="navbar-item category--brand">
            Categories
          </h1>
          <button

            type="button"
            id="js_burger"
            className="navbar-burger burger caret"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.handleOnClick}
          >
            <span><i className="fas fa-angle-down fa-2x" /></span>
          </button>
        </div>
        <div className="navbar-menu" id="js_categoryNav">
          <div className="Categories-container container">
            <Categories />
          </div>
        </div>
      </nav>
    );
  }
}


export default MinorNav;
