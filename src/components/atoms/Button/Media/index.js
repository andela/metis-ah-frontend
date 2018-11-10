import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SocialLoginButton from 'Components/atoms/Button/SocialLoginButton';

import './style.scss';

const mediaButtonSection = (props) => {
  const { toggle } = props;

  return (
    <Fragment>
      <div className="container_media_button">
        <p>
          {toggle ? 'Signup ' : 'Login '}
          with your social account here
        </p>
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
};
mediaButtonSection.defaultProps = {
  toggle: false
};

mediaButtonSection.propTypes = {
  toggle: PropTypes.bool
};
export default mediaButtonSection;
