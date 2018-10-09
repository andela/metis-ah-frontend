import React from 'react';
import { Link } from 'react-router-dom';
import classes from './style';

const Button = () => (
  <Link role="button" className={`button ${classes.btn}`} to="\">
    Login
  </Link>
);

export default Button;
