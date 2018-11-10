import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Signup from '../../compounds/Signup/Signup';
import Login from '../../compounds/LoginForm';

import './style.scss';

const Tab = (props) => {
  const { toggle, toggleHandlers } = props;

  return (
    <Fragment>
      <h1 id="auth-modal-header">Join The Community</h1>
      <p id="auth-modal-desc">{toggle ? 'Register using the form below' : 'Login with your email and password'}</p>
      <div className="form_tab">
        <button className={toggle ? 'tab_Active tab_register_button' : 'tab_register_button bordered'} id="tab_Register" type="button" onClick={() => toggleHandlers.signup()}>REGISTER</button>
        <button className={toggle ? 'tab_login_button bordered' : 'tab_Active  tab_login_button'} id="tab_Login" type="button" onClick={() => toggleHandlers.login()}>LOGIN</button>
        <div id="ah-form-container">
          {toggle ? <Signup /> : <Login />}
        </div>
      </div>
      <h5 id="or">OR</h5>
    </Fragment>
  );
};

Tab.defaultProps = {
  toggle: false,
  toggleHandlers: {}
};

Tab.propTypes = {
  toggle: PropTypes.bool,
  toggleHandlers: PropTypes.objectOf(PropTypes.func)
};

export default Tab;
