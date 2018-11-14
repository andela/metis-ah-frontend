import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/SignButton';
import Input from '../../atoms/InputField/InputField';
import { createUser, closeModal } from '../../../store/actions/authUser';
import handleValidation from '../../../util/helpers/formValid';

import './style.scss';

/**
 * @class Signup
 */
class Signup extends Component {
  /**
   * @constructor function
   * @param {*} props React properties
   */
  state = {
    newUser: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    showPassword: false
  }


  /**
   * @memberOf handleChangeEvent
   * @method handleChangeEvent
   * @param {*} event
   * @return {*} setstate
   */
  handleChangeEvent = (event) => {
    const { newUser } = this.state;
    this.setState({
      newUser: {
        ...newUser,
        [event.target.name]: event.target.value
      }
    });
  }

  /**
   * @memberOf showPassword
   * @method showPassword
   * @return {*} setstate
   */
  showPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  }

  /**
   * @memberOf Signup
   * @method handleSubmitEvent
   * @param {*} event
   * @return {*} setstate
   */
  handleSubmitEvent = (event) => {
    event.preventDefault();
    const { createUserAction, history } = this.props;
    const { newUser } = this.state;
    const validatedResult = handleValidation(newUser);
    if (validatedResult.formIsValid) {
      const userData = {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        verifyURL: 'https://metis-ah-frontend.herokuapp.com',
      };
      createUserAction(userData, history);
    } else {
      Object.values(validatedResult.errors).forEach((msg) => {
        toastr.error(`${msg}`);
      });
    }
  }

  /**
   * @func render
   * @return {*} JSX
   */
  render() {
    const { newUser, showPassword } = this.state;
    const { loading, closeModalAction } = this.props;
    return (
      <div>
        <button type="button" onClick={closeModalAction} className="signup_close">&times;</button>
        <div className="FormGroup">
          <form className="signupForm" onSubmit={this.handleSubmitEvent}>
            <div className="field control has-icons-right">
              <Input
                label="Username"
                id="user_name"
                type="text"
                onChange={this.handleChangeEvent}
                value={newUser.username}
                name="username"
                className="input is-medium is-medium"
              />
            </div>
            <div className="field control has-icons-right">
              <Input
                id="email_id"
                label="Email"
                type="email"
                onChange={this.handleChangeEvent}
                value={newUser.email}
                name="email"
                className="input is-medium"
              />
            </div>

            <div className="field">
              <div className="control is-expanded show-password-toggle-group">
                <button type="button" onClick={this.showPassword} className="ShowPassword">
                  {showPassword ? 'hide password' : 'show password'}
                </button>
                <Input
                  label="Password"
                  id="password_id"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={this.handleChangeEvent}
                  value={newUser.password}
                  className="input is-medium"
                />
              </div>
            </div>
            <div className="field">
              <div className="control is-expanded ">
                <Input
                  label="Confirm Password"
                  id="confirm_pass_id"
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  onChange={this.handleChangeEvent}
                  value={newUser.confirmPassword}
                  className="input is-medium"
                />
              </div>
            </div>

            <Button className="button is-fullWidth is-medium signBtn signup_button" disabled={loading}>
              REGISTER
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Signup.proptype = {
  createUserAction: PropTypes.func.isRequired
};

Signup.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createUserAction: (userData, history) => dispatch(createUser(userData, history)),
  closeModalAction: () => dispatch(closeModal())
});

const mapStateToProps = state => ({
  loading: state.authUser.loading
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
