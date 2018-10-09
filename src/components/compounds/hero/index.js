import React from 'react';

import Button from 'Components/atoms/button';
import classes from './style.css';

const hero = () => (
  <div className={`${classes.hero}`}>
    <h1 className={`${classes.title}`}>AUTHOR&apos;S HAVEN</h1>
    <p className={`${classes.text}`}>A community where readers and writers come together to share and discuss knowledge and ideas.</p>
    <Button text="GET STARTED" />
  </div>
);

export default hero;
