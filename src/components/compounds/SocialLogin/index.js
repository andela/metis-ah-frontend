import React from 'react';
import SocialLoginButton from 'Components/atoms/Button/SocialLoginButton';

const SocialLogin = () => (
  <div>
    <SocialLoginButton
      media="Google"
      className="google Social-Login"
      backEndLoginURL="http://localhost:3000/api/v1/users/auth/google"
    />
    <SocialLoginButton
      media="Facebook"
      className="facebook Social-Login"
      backEndLoginURL="http://localhost:3000/api/v1/users/auth/facebook"
    />
    {/* <SocialLoginButton
      media="Twitter"
      className="twitter Social-Login"
      backEndLoginURL="http://localhost:3000/api/v1/users/auth/twitter"
    /> */}
  </div>
);

export default SocialLogin;
