import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const BasicNav = ({
  logo, brandName, classes = 'navbar', id = 'navbar-plain', ...props
}) => (
  <Fragment>
    <nav id={id} {...props} className={classes}>
      <div className="container">
        <Link className="navbar-item" to="/">
          <img id="logo" src={logo} alt="Authors haven logo" />
          <h1 className="brand">{brandName}</h1>
        </Link>
      </div>
    </nav>
  </Fragment>
);

export default BasicNav;
