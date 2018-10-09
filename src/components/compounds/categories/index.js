import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './style.css';

const categories = props => (
  props.categories.map(item => (
    <Link key={item} className={`${classes.item} ${props.selected === item ? classes.selected : ''}`} to="/">
      {item}
    </Link>
  ))
);

const mapStateToProps = state => ({
  categories: state.categories.categories,
  selected: state.categories.selected,
});

export default connect(mapStateToProps)(categories);
