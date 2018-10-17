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

const SocialLogin = ({ backEndLoginURL, type, ...props }) => (
  <button
    type="button"
    onClick={() => redirect(backEndLoginURL, type)}
    {...props}
    aria-label={`${type} social login `}
  >
    <div className="icon inline">
      {injectIcon(type)}
    </div>
    <div className="font inline">
      {type}
    </div>
  </button>
);

SocialLogin.propTypes = {
  backEndLoginURL: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default SocialLogin;
