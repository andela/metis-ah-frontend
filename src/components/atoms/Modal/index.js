import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ToggleForm from 'Atoms/ToggleForm';
import MediaSignupSection from 'Atoms/Button/Media';

import { closeModal } from 'Actions/authUser';
import './style.scss';

class Modal extends React.Component {
  state = {
    toggle: true
  }

  showLoginForm = () => {
    this.setState({ toggle: false });
  }

  showRegisterForm = () => {
    this.setState({ toggle: true });
  }

  closeModalHandle = (e) => {
    const { closeModal } = this.props;
    return (e.target.className === 'Backdrop' ? closeModal() : false);
  }

  render() {
    const togglers = {
      signup: this.showRegisterForm,
      login: this.showLoginForm
    };
    const { toggle } = this.state;
    return (
      <Fragment>
        <div
          aria-hidden
          onClick={this.closeModalHandle}
          role="button"
          className="Backdrop"
        >
          <div className="Modal">
            <ToggleForm toggle={toggle} toggleHandlers={togglers} />
            <MediaSignupSection toggle={toggle} />
          </div>
        </div>
      </Fragment>
    );
  }
}


export default connect(
  null,
  { closeModal }
)(Modal);
