/** gobals toastr */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetPassword } from 'Actions/resetPasswordActions';
import validateEmail from 'Utils/validateEmail';
import logo from 'Images/logo.png';
import './style.scss';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: ''
    };
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    const { email } = this.state;
    // eslint-disable-next-line
    const { resetPassword } = this.props;
    e.preventDefault();

    const { isValidData, error } = validateEmail(email);

    if (isValidData) {
      this.setState({
        error: ''
      });
      resetPassword(email);
    } else {
      this.setState({
        error
      });
    }
  }

  render() {
    const { email, error } = this.state;
    const { successMessage, errorMessage } = this.props;
    return (
      <div id="reset-password-body">

        <nav className="navbar container navbar-plain">
          <Link className="navbar-item" to="/">
            <img id="logo" src={logo} alt="Authors haven logo" />
            <h1 className="title">Author&apos;s Haven</h1>
          </Link>
        </nav>

        <div className="container" id="reset-password-container">
          <h4 id="psw-title">RESET PASSWORD</h4>
          {error.length > 1 ? toastr.error(error) : null}
          {successMessage ? <span id="success-message">{successMessage}</span> : null}
          {errorMessage ? <span id="error-message">{errorMessage}</span> : null}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p>Enter Your Email</p>
            <input onChange={this.handleChange.bind(this)} id="email-input" type="text" value={email} />
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    );
  }
}
ResetPassword.defaultProps = {
  successMessage: '',
  errorMessage: ''
};


ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  successMessage: state.passwordReset.successMessage,
  errorMessage: state.passwordReset.errorMessage
});

export default connect(
  mapStateToProps,
  { resetPassword }
)(ResetPassword);
