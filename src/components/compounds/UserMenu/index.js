import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserMenuItem from 'Components/atoms/UserMenuItem';
import { logoutUser } from '../../../store/actions/authUser';

import './style.scss';

const UserMenu = (props) => {
  const {
    showUserMenu, history, logout, id
  } = props;
  return (
    <div className={`user-menu ${showUserMenu ? 'user-menu--show' : 'user-menu--hide'}`} aria-label="profile menu">
      <UserMenuItem onClick={() => history.push(`/users/${id}`)}>Profile</UserMenuItem>
      <UserMenuItem onClick={() => logout(history)}>logout</UserMenuItem>
    </div>
  );
};

UserMenu.propTypes = {
  showUserMenu: PropTypes.bool,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  logout: PropTypes.func.isRequired,
  id: PropTypes.number
};

UserMenu.defaultProps = {
  showUserMenu: false,
  id: 0
};
const mapStateToProps = state => ({
  showUserMenu: state.authUser.showUserMenu,
  id: state.authUser.user.id
});

const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(logoutUser(history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserMenu));
