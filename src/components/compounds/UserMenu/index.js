import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserMenuItem from 'Components/atoms/UserMenuItem';
import { logoutUser } from '../../../store/actions/authUser';

import './style.scss';

const UserMenu = (props) => {
  const {
    history, logout, id, handleSelect
  } = props;
  return (
    <div className="user-menu" aria-label="profile menu">
      <UserMenuItem
        id="profile-button"
        onClick={() => {
          handleSelect();
          return history.push(`/users/${id}`);
        }}
      >
        Profile

      </UserMenuItem>
      <UserMenuItem id="logout-button" onClick={() => logout(history)}>Logout</UserMenuItem>
    </div>
  );
};

UserMenu.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  logout: PropTypes.func.isRequired,
  id: PropTypes.number,
  handleSelect: PropTypes.func.isRequired
};

UserMenu.defaultProps = {
  id: 0
};
const mapStateToProps = state => ({
  id: state.authUser.user.id
});

const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(logoutUser(history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserMenu));
