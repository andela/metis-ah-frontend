import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './style.css';

const setClasses = (selected, isFooter, item) => {
  if (!isFooter) {
    return (`${classes.item} ${selected === item ? classes.selected : ''}`);
  }

  return (`${classes.footItem}`);
};

const categories = props => (
  props.categories.map(item => (
    <Link
      key={item}
      className={setClasses(props.selected, props.footer, item)}
      to="/"
    >
      {item}
    </Link>
  ))
);

const mapStateToProps = state => ({
  categories: state.categories.categories,
  selected: state.categories.selected,
});

export default connect(mapStateToProps)(categories);
