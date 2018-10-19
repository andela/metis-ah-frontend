import React from 'react';
import Button from '../SignButton';

import './style.scss';

const mediaButtonSection = () => (
  <div>
    <div className="container_media_button">
      <h1>Join The Community</h1>
      <p>Sign up with your social account here</p>
      <Button className="button is-medium GoogleBtn">
        <i className="fab fa-google-plus-square iconLeft" />
            &nbsp; &nbsp; Google
      </Button>
      <Button className="button is-medium FBookBtn">
        <i className="fab fa-facebook-square iconLeft" />
            &nbsp; &nbsp; Facebook
      </Button>
      <Button className="button is-medium TwitterBtn">
        <i className="fab fa-twitter-square iconLeft" />
            &nbsp; &nbsp; Twitter
      </Button>
    </div>
  </div>
);

export default mediaButtonSection;
