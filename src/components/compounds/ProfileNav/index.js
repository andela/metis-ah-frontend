import React from 'react';
import { connect } from 'react-redux';
import LoginButton from 'Components/atoms/LoginButton';
import WriteButton from 'Components/atoms/WriteButton';
import Avatar from 'Components/atoms/Avatar';
import avatarImage from '../../../static/images/daniel.jpg';

const NavBar = (props) => {
  const { isAuth } = props;
  return (
    <div className="buttons">
      <WriteButton />
      { !isAuth && <LoginButton />}
      { isAuth && <Avatar src={`${avatarImage}`} />}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});
export default connect(mapStateToProps)(NavBar);
