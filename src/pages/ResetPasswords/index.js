import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// eslint-disable-next-line
import { resetVerifiedUserPassword } from 'Actions/resetPasswordActions';
// eslint-disable-next-line
import validatePassword from 'Utils/validatePassword';
import logo from 'Images/logo.png';
import './style.scss';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        password: '',
        confirmPassword: '',
      },
      error: ''
    };
  }

  handleChange(e) {
    const { userInfo } = this.state;
    const newUserInfo = { ...userInfo };
    newUserInfo[`${e.target.name}`] = e.target.value;
    this.setState({
      userInfo: newUserInfo
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userInfo } = this.state;
    // eslint-disable-next-line
    const { resetVerifiedUserPassword } = this.props;
    const { isValidData, error } = validatePassword(userInfo);

    if (isValidData) {
      this.setState({
        error: ''
      });
      resetVerifiedUserPassword(userInfo);
    } else {
      this.setState({
        error
      });
    }
  }

  render() {
    const { userInfo, error } = this.state;
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
          {error.length > 1 ? <span id="error-message">{error}</span> : null}
          {successMessage ? <span id="success-message">{successMessage}</span> : null}
          {errorMessage ? <span id="error-message">{errorMessage}</span> : null}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p>New Password</p>
            <input onChange={this.handleChange.bind(this)} name="password" className="password-input" type="password" value={userInfo.password} />
            <br />

            <p>Confirm New Password</p>
            <input onChange={this.handleChange.bind(this)} name="confirmPassword" className="password-input" type="password" value={userInfo.confirmPassword} />
            <br />

            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  resetVerifiedUserPassword: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  successMessage: state.passwordReset.successMessage,
  errorMessage: state.passwordReset.errorMessage
});

export default connect(
  mapStateToProps,
  { resetVerifiedUserPassword }
)(ResetPassword);
