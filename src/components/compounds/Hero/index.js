import React from 'react';

import Button from 'Components/atoms/Button';
import './style.scss';

const Hero = () => (
  <div className="hero">
    <h1 className="title">AUTHOR&apos;S HAVEN</h1>
    <p className="text">A community where readers and writers come together to share and discuss knowledge and ideas.</p>
    <Button text="GET STARTED" />
  </div>
);

export default Hero;
