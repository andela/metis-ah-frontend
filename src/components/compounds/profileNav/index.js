import React from 'react';
import LoginButton from 'Components/atoms/loginButton';
import WriteButton from 'Components/atoms/writeButton';

const NavBar = () => (
  <div className="buttons">
    <LoginButton />
    <WriteButton />
  </div>
);

export default NavBar;
