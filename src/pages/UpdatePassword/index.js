import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FooterBrand from 'Components/compounds/FooterBrand';
import BasicNav from 'Components/compounds/BasicNav';
import InputField from 'Components/atoms/InputField/InputField';
import { resetVerifiedUserPassword } from 'Actions/resetPasswordActions';
import validatePassword from 'Utils/validatePassword';
import Alert from 'Utils/helpers/alert';
import logo from 'Images/logo.png';
import './style.scss';

export class UpdatePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleChange = (e) => {
    const { userInfo } = this.state;
    const newUserInfo = { ...userInfo };
    newUserInfo[`${e.target.name}`] = e.target.value;
    this.setState({
      userInfo: newUserInfo
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInfo } = this.state;
    const { resetVerifiedUserPassword } = this.props;
    const { isValidData, error } = validatePassword(userInfo);

    if (isValidData) {
      const { match, history } = this.props;
      return resetVerifiedUserPassword(userInfo.password, match.params.token, history);
    }
    return Alert.error(error);
  }

  render() {
    const { userInfo } = this.state;
    const { isLoading } = this.props;
    return (
      <Fragment>
        <div id="reset-password-final-body">

          <BasicNav
            brandName="Author&apos;s Haven"
            logo={logo}
          />

          <div className="container" id="reset-password-container">
            <h4 id="psw-title">RESET PASSWORD</h4>
            <form onSubmit={this.handleSubmit}>
              <InputField label="New Password" onChange={this.handleChange} name="password" className="password-input" type="password" value={userInfo.password} />
              <InputField label="Confirm New Password" onChange={this.handleChange} name="confirmPassword" className="password-input" type="password" value={userInfo.confirmPassword} />
              <InputField type="submit" value="SAVE" style={isLoading ? { opacity: 0.3 } : null} disabled={isLoading} />
              <i id="spinner" className={isLoading ? 'fas fa-spinner fa-spin' : ''} />
            </form>
          </div>
        </div>

        <FooterBrand />
      </Fragment>
    );
  }
}

UpdatePassword.propTypes = {
  resetVerifiedUserPassword: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.passwordReset.isLoading
});

export default connect(
  mapStateToProps,
  { resetVerifiedUserPassword }
)(UpdatePassword);
