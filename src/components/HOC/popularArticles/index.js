import React from 'react';

import PopularCards from 'Components/compounds/popularCards';
import classes from './style.css';

const popular = () => (
  <div className={classes.wrapper}>
    <h2 className={classes.heading}>POPULAR ON AUTHOR'S HAVEN</h2>
    <div className="columns">
      <PopularCards />
    </div>
    <div className={classes.more}>
      <span>SEE ALL POPULAR</span>
      <i className={`fas fa-chevron-right ${classes.right}`} />
    </div>
  </div>
);

export default popular;
