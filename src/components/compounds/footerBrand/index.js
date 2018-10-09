import React from 'react';

import classes from './style.css';

const brand = () => (
  <div className={classes.brandFooter}>
    <div className={`container ${classes.brand}`}>
      <p>2018 Copyright of metis team</p>
      <div>
        <i className={`fab fa-facebook-square ${classes.space}`} />
        <i className={`fab fa-twitter ${classes.space}`} />
        <i className={`fab fa-google-plus-g ${classes.space}`} />
      </div>
    </div>
  </div>
);

export default brand;
