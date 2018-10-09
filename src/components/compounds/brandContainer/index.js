import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './style.css';
import logo from 'Images/logo.png';

const brandContainer = (props) => {
  const { showMenu, menu } = props;
  return (
    <div className={`navbar-brand ${classes.brand}`}>
      <Link className="navbar-item" to="/">
        <img id={`${classes.logo}`} src={logo} alt="Authors haven logo" />
        <h1 className={`${classes.title}`}>Author&apos;s Haven</h1>
      </Link>
      <button
        type="button"
        className={`navbar-burger burger' ${menu ? 'is-active' : ''}' ${classes.bug}`}
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

brandContainer.propTypes = {
  showMenu: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
};

export default brandContainer;
