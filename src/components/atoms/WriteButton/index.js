import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Button = () => (
  <Link id="app-write-button" role="button" className="button btn app-general-button" to="\">
    <strong>WRITE</strong>
  </Link>
);

export default Button;
