import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style';

const setClasses = (selected, isFooter, item) => {
  if (!isFooter) {
    return (`Categories-item ${selected === item ? 'Categories-selected' : ''}`);
  }

  return ('Categories-footItem');
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
