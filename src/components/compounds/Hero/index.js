import React, { Component } from 'react';
import Button from 'Components/atoms/Button';
import './style.scss';
import { connect } from 'react-redux';
import Signup from '../Signup/Signup';
import Modal from '../../atoms/Modal';
import { showModal, closeModal, userFail } from '../../../store/actions/authUser';

class Hero extends Component {
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
    const { modalOpen, isAuth, showModalHandler } = this.props;

    return (
      <div className="hero">
        <h1 className="title">AUTHOR&apos;S HAVEN</h1>
        <p className="text">A community where readers and writers come together to share and discuss knowledge and ideas.</p>
        {isAuth
          ? <Button color="green" onClick={() => toastr.success('comming soon...')}>WRITE</Button>
          : <Button color="white" onClick={() => showModalHandler()}>GET STARTED</Button>
        }
        {
          modalOpen && (
            <Modal onClick={this.closeModalHandler}>
              <Signup closeModalHandler={this.closeModalHandler} />
            </Modal>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.authUser.modalOpen,
  isAuth: state.authUser.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  showModalHandler: () => dispatch(showModal()),
  closeModalHandle: () => dispatch(closeModal()),
  userfail: () => dispatch(userFail())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
