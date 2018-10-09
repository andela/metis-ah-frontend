import React from 'react';
import classes from './style.css';

const Search = () => (
  <input className={`input is-primary ${classes.search}`} type="text" placeholder="Search" aria-label="search author's haven" />
);

export default Search;
