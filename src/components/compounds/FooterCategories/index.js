import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from 'Components/compounds/Categories';
import './style.scss';


class Footer extends Component {
  handleOnClick = (event) => {
    event.preventDefault();
    const button = event.currentTarget;
    if (button.nodeName === 'BUTTON') {
      button.classList.toggle('is-active');
      return document.getElementById(button.dataset.target).classList.toggle('is-active');
    }
  }

  render() {
    const { getElementById } = this.props;
    return (
      <nav className="navbar footer-nav-categories" role="navigation" aria-label="categories navigation">
        <div className="navbar-brand footer-navbar-brand">
          <h1 className="navbar-item category--brand">
      Categories
          </h1>
          <button
            type="button"
            className="navbar-burger burger caret2"
            aria-label="menu"
            aria-expanded="false"
            data-target={getElementById}
            onClick={this.handleOnClick}
          >
            <span><i className="fas fa-angle-down fa-2x" /></span>
          </button>
        </div>
        <div className="navbar-menu" id={getElementById}>
          <div className="Categories-container container">
            <Categories footer />
          </div>
        </div>
      </nav>
    );
  }
}

Footer.propTypes = {
  getElementById: PropTypes.string.isRequired
};
export default Footer;
