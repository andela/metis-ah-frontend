import React, { Component } from 'react';
import Signup from '../../compounds/Signup/Signup';
import Login from '../../compounds/LoginForm';

import './style.scss';

class Tab extends Component {
  state = {
    toggle: true
  }

  showLoginForm = () => {
    this.setState({ toggle: false });
  }

  showRegisterForm = () => {
    this.setState({ toggle: true });
  }

  render() {
    const { toggle } = this.state;

    return (
      <div className="form_tab">
        <button id="tab_Register" type="button" className="tab_register_button" onClick={this.showRegisterForm}>REGISTER</button>
        <button id="tab_Login" type="button" className="tab_login_button" onClick={this.showLoginForm}>LOGIN</button>
        <div>
          {toggle ? <Signup /> : <Login />}
        </div>
      </div>
    );
  }
}

export default Tab;
