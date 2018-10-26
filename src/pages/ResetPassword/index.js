import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetPassword } from 'Actions/resetPasswordActions';
import FooterBrand from 'Components/compounds/FooterBrand';
import validateEmail from 'Utils/validateEmail';
import BasicNav from 'Components/compounds/BasicNav';
import InputField from 'Components/atoms/InputField/InputField';

import Alert from 'Utils/helpers/alert';
import logo from 'Images/logo.png';
import './style.scss';

export class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { resetPassword } = this.props;

    const { isValidData, error } = validateEmail(email);
    if (isValidData) {
      return resetPassword(email);
    }
    return Alert.error(error);
  }

  render() {
    const { email } = this.state;
    const { isLoading } = this.props;
    return (
      <Fragment>
        <div id="reset-password-body">

          <BasicNav
            brandName="Author&apos;s Haven"
            logo={logo}
          />

          <div className="container" id="reset-password-container">
            <h4 id="psw-title">RESET PASSWORD</h4>

            <form onSubmit={this.handleSubmit}>
              <InputField onChange={this.handleChange} id="email-input" type="email" value={email} name="email" label="Enter Your Email" />
              <InputField type="submit" value="SEND" style={isLoading ? { opacity: 0.3 } : null} disabled={isLoading} />
              <i id="spinner" className={isLoading ? 'fas fa-spinner fa-spin' : ''} />
            </form>
          </div>
        </div>

        <FooterBrand />
      </Fragment>

    );
  }
}


ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.passwordReset.isLoading
});

export default connect(
  mapStateToProps,
  { resetPassword }
)(ResetPassword);
