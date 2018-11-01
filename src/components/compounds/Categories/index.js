import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from 'Actions/categories';

import './style.scss';

class Categories extends React.Component {
  componentDidMount() {
    const { categories, getCategoriesData } = this.props;
    if (!categories.length) {
      getCategoriesData();
    }
  }

  render() {
    const { footer, categories } = this.props;
    const navCategories = categories.map(item => (
      <NavLink
        key={item.id}
        className={footer ? 'categories-footItem' : 'categories-item'}
        activeClassName={footer ? 'categories-footItem-selected' : 'categories-selected'}
        exact
        to={`/articles/${item.id}`}
      >
        {item.name}
      </NavLink>
    ));
    return (
      <React.Fragment>
        {
          <NavLink
            to="/"
            className={footer ? 'categories-footItem' : 'categories-item'}
            activeClassName={footer ? 'categories-footItem-selected' : 'categories-selected'}
            exact
          >
            HOME
          </NavLink>
        }
        {navCategories}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  selected: state.categories.selected,
});

const mapDispatchToProps = dispatch => ({
  getCategoriesData: () => dispatch(getCategories())
});


Categories.defaultProps = {
  footer: false,
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number, name: PropTypes.string
  })).isRequired,
  footer: PropTypes.bool,
  getCategoriesData: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));
