import React, { Fragment } from 'react';

import SocialLoginButton from 'Components/atoms/Button/SocialLoginButton';

import './style.scss';

const mediaButtonSection = () => (
  <Fragment>
    <div className="container_media_button">
      <h1>Join The Community</h1>
      <p>Sign up with your social account here</p>
      <SocialLoginButton
        media="Google"
        className="google Social-Login"
        backEndLoginURL="https://metis-ah-staging.herokuapp.com/api/v1/users/auth/google"
      />
      <SocialLoginButton
        media="Facebook"
        className="facebook Social-Login"
        backEndLoginURL="https://metis-ah-staging.herokuapp.com/api/v1/users/auth/facebook"
      />
    </div>
  </Fragment>
);

export default mediaButtonSection;
