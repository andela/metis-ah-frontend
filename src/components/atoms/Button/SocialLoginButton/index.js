import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const injectIcon = (type) => {
  switch (type) {
    case ('Facebook'):
      return <i className="fab fa-facebook-f" />;
    case ('Google'):
      return <i className="fab fa-google" />;
    case ('Twitter'):
      return <i className="fab fa-twitter" />;
    default:
      return null;
  }
};

const redirect = (url) => {
  window.location.href = url;
};

const SocialLogin = ({ backEndLoginURL, media, ...props }) => (
  <button
    type="button"
    onClick={() => redirect(backEndLoginURL, media)}
    {...props}
    aria-label={`${media} social login `}
  >
    <div className="icon inline">
      {injectIcon(media)}
    </div>
    <div className="font inline">
      {media}
    </div>
  </button>
);

SocialLogin.propTypes = {
  backEndLoginURL: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired
};

export default SocialLogin;
