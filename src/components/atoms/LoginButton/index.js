import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Button = () => (
  <Link role="button" className="button login-button" to="\">
    Login
  </Link>
);

export default Button;
