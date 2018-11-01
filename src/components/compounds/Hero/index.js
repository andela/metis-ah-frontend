import React, { Component } from 'react';
import Radium from 'radium';
import Button from 'Components/atoms/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToggleForm from '../../atoms/ToggleForm';
import MediaSignupSection from '../../atoms/Button/Media';
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
  };

  render() {
    const {
      heroContent: {
        name, description, poster, buttonIsVisible, className, history
      }
    } = this.props;
    const { modalOpen, isAuth, showModalHandler } = this.props;
    const url = `linear-gradient(rgba(19, 180, 122, 0.51), rgba(19, 180, 122, 0.51)), url(${poster})`;

    return (
      <div
        className={`${className}`}
        style={{
          background: url
        }}
      >
        <h1 className="title">{name}</h1>
        <p className="text">{description}</p>
        {
          buttonIsVisible && (isAuth
            ? <Button color="white" onClick={() => history.push('/articles/new')}>WRITE</Button>
            : <Button color="white" onClick={() => showModalHandler()}>GET STARTED</Button>)
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
  heroContent: state.article.heroContent
});

const mapDispatchToProps = dispatch => ({
  showModalHandler: () => dispatch(showModal()),
  closeModalHandle: () => dispatch(closeModal()),
  userfail: () => dispatch(userFail())
});

Hero.propTypes = {
  heroContent: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    poster: PropTypes.string,
    buttonIsVisible: PropTypes.bool,
    className: PropTypes.string
  }).isRequired,
  isAuth: PropTypes.bool.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  showModalHandler: PropTypes.func.isRequired,
  closeModalHandle: PropTypes.func.isRequired,
  userfail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Radium(Hero)));
