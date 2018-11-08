import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginButton from 'Components/atoms/LoginButton';
import WriteButton from 'Components/atoms/WriteButton';
import Avatar from 'Components/atoms/Avatar';

const NavBar = (props) => {
  const { isAuth, history } = props;
  return (
    <div className="buttons">
      <WriteButton history={history} />
      { !isAuth && <LoginButton />}
      { isAuth && <Avatar />}
    </div>
  );
};

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired

};

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});
export default connect(mapStateToProps)(withRouter(NavBar));
