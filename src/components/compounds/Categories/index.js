import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../../store/actions/categories';
import './style.scss';

const setClasses = (selected, isFooter, item) => {
  if (!isFooter) {
    return (`Categories-item ${selected === item ? 'Categories-selected' : ''}`);
  }

  return ('Categories-footItem');
};

class Categories extends React.Component {
  componentDidMount() {
    const { categories, getCategoriesData } = this.props;
    if (categories.length < 1) {
      getCategoriesData();
    }
  }

  render() {
    const { categories, footer, selected } = this.props;
    return (
      categories.map(item => (
        <Link
          key={item.id}
          className={setClasses(selected, footer, item)}
          to="/"
        >
          {item.name}
        </Link>
      ))
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  footer: PropTypes.bool.isRequired,
  getCategoriesData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
