import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from 'Images/logo.png';

import './style.scss';

const BrandContainer = (props) => {
  const { showMenu, menu } = props;
  return (
    <div className="navbar-brand brand header-brand-container">
      <Link className="navbar-item" to="/">
        <img id="logo" src={logo} alt="Authors haven logo" />
        <h1 className="title">Author&apos;s Haven</h1>
      </Link>
      <button
        type="button"
        className={`navbar-burger burger' ${menu ? 'is-active' : ''}' bug`}
        aria-label="menu"
        aria-expanded="false"
        data-target="profile-nav"
        onClick={showMenu}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
  );
};

BrandContainer.propTypes = {
  showMenu: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
};

export default BrandContainer;
