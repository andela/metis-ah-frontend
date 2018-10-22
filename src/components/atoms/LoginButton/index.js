import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import LoginForm from '../../compounds/LoginForm';
import { showModal, closeModal, userFail } from '../../../store/actions/authUser';
import './style.scss';

class LoginButton extends Component {
  /**
   * @memberOf Signup
   * @method showModalHandler
   * @param {*} event
   * @return {*} setstate
   */
  showModalHandler = () => {
    const { showModalHandle } = this.props;
    showModalHandle();
  }

  /**
   * @memberOf Signup
   * @method closeModalHandler
   * @param {*} event
   * @return {*} setstate
   */
  closeModalHandler = () => {
    const { closeModalHandle, userfail } = this.props;
    closeModalHandle();
    userfail();
  }

  render() {
    const {
      modalOpen,
      isAuth
    } = this.props;
    return (
      <div>
        <button type="button" className="button login-button" onClick={this.showModalHandler}>
          Login
        </button>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.authUser.modalOpen,
  isAuth: state.authUser.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  showModalHandle: () => dispatch(showModal()),
  closeModalHandle: () => dispatch(closeModal()),
  userfail: () => dispatch(userFail())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
