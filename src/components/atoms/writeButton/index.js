import React from 'react';
import { Link } from 'react-router-dom';
import classes from './style.css';

const Button = () => (
  <Link role="button" className={`button btn ${classes.btnprimary}`} to="\">
    <strong>WRITE</strong>
  </Link>
);

export default Button;
