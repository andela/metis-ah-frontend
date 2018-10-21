import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
import UserMenuItem from 'Components/atoms/UserMenuItem';
import { logoutUser } from '../../../store/actions/authUser';

import './style.scss';

const UserMenu = (props) => {
  const { showUserMenu, history, logout } = props;
  return (
    <div className={`user-menu ${showUserMenu ? 'user-menu--show' : 'user-menu--hide'}`} aria-label="profile menu">
      <UserMenuItem onClick={() => logout(history)}>logout</UserMenuItem>
    </div>
  );
};

UserMenu.propTypes = {
  showUserMenu: PropTypes.bool.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  showUserMenu: state.authUser.showUserMenu,
});

const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(logoutUser(history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserMenu));
