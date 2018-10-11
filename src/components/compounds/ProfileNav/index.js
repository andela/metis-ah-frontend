import React from 'react';
import LoginButton from 'Components/atoms/LoginButton';
import WriteButton from 'Components/atoms/WriteButton';

const NavBar = () => (
  <div className="buttons">
    <LoginButton />
    <WriteButton />
  </div>
);

export default NavBar;
