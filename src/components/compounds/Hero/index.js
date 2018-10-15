import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'Components/atoms/Button';
import ToggleForm from '../../atoms/ToggleForm';
import MediaSignupSection from '../../atoms/Button/Media';
import Signup from '../Signup/Signup';
import Modal from '../../atoms/Modal';
import { showModal, closeModal, userFail } from '../../../store/actions/authUser';
import './style.scss';

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
    const { category } = this.props;
    const url = `linear-gradient(rgba(19, 180, 122, 0.51), rgba(19, 180, 122, 0.51)), url(${category.poster})`;

    return (
      <div
        className="hero"
        style={{
          background: url
        }}
      >
        <h1 className="title">{category.name}</h1>
        <p className="text">{category.description}</p>
        {isAuth
          ? <Button color="green" onClick={() => toastr.success('comming soon...')}>WRITE</Button>
          : <Button color="white" onClick={() => showModalHandler()}>GET STARTED</Button>
        }
        {
          modalOpen && (
            <Modal>
              <MediaSignupSection />
              <ToggleForm />
            </Modal>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.authUser.modalOpen,
  isAuth: state.authUser.isAuthenticated,
  category: state.article.category
});

const mapDispatchToProps = dispatch => ({
  showModalHandler: () => dispatch(showModal()),
  closeModalHandle: () => dispatch(closeModal()),
  userfail: () => dispatch(userFail())
});

Hero.propTypes = {
  category: PropTypes.object.isRequired // Of(PropTypes.string).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Hero));
