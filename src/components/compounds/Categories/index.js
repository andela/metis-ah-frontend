import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';

const setClasses = (selected, isFooter, item) => {
  if (!isFooter) {
    return (`Categories-item ${selected === item ? 'Categories-selected' : ''}`);
  }

  return ('Categories-footItem');
};

const Categories = props => (
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

export default connect(mapStateToProps)(Categories);
