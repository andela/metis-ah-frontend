import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/SignupButton';
import Input from '../../atoms/InputField/InputField';
import { loginUser, closeModal } from '../../../store/actions/authUser';
import formValid from '../../../util/helpers/LoginFormValid';
import './style.scss';

/**
 * @class Signup
 */
class LoginForm extends Component {
  state = {
    user: {
      email: '',
      password: '',
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
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
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
   * @memberOf LoginForm
   * @method handleSubmitEvent
   * @param {*} event
   * @return {*} setstate
   */
  handleSubmitEvent = (event) => {
    event.preventDefault();
    const { createLoginAction } = this.props;
    const { user } = this.state;
    const userData = {
      email: user.email,
      password: user.password
    };
    if (formValid(userData)) {
      createLoginAction(userData);
    } else {
      toastr.error('Please complete the form');
    }
  }

  /**
   * @func render
   * @return {*} JSX
   */
  render() {
    const {
      user, showPassword
    } = this.state;
    const { loading, closeModalAction } = this.props;
    return (
      <div>
        <button type="button" onClick={closeModalAction} className="closer login_close">&times;</button>
        <div className="FormGroup">
          <form className="signupForm" onSubmit={this.handleSubmitEvent}>
            <div className="field control has-icons-right">
              <Input
                type="email"
                id="email_login"
                label="Email"
                onChange={this.handleChangeEvent}
                value={user.email}
                name="email"
                className="input is-medium login_email"
              />
              <br />
            </div>
            <div className="field">
              <div className="control is-expanded ">
                <button type="button" onClick={this.showPassword} className="ShowPassword">
                  { showPassword ? 'Hide Password' : 'Show Password'}
                </button>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  name="password"
                  onChange={this.handleChangeEvent}
                  value={user.password}
                  className="input is-medium login_password"
                />
              </div>
            </div>
            <Link id="forget-password" to="/auth/reset-password">Forget password?</Link>
            <Button className="button is-fullWidth is-medium signBtn login_button" disabled={loading}>
                LOGIN
              <i className={`${loading ? 'fas fa-spinner fa-spin' : ''} spin`} />
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
LoginForm.proptype = {
  createLoginAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
  createLoginAction: userData => dispatch(loginUser(userData)),
  closeModalAction: () => dispatch(closeModal())
});
const mapStateToProps = state => ({
  loading: state.authUser.loading
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
