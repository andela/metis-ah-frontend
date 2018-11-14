/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Selector from 'react-select';
import './style.scss';

export const CategorySelect = (props) => {
  const { categories, selectedCategory, handler } = props;
  const allCategories = categories.map(category => (
    { value: category.id, label: category.name }
  ));

  return (
    <div>
      <Selector
        value={selectedCategory}
        className="CategorySelector"
        onChange={handler}
        options={allCategories}
        placeholder="Choose a category"
        styles={{
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isFocused ? '#9AE3C9' : isSelected ? '#4DD6A5' : '#fff',
            color: isFocused || isSelected ? '#fff' : '#4DD6A5'
          }),
          singleValue: base => ({ ...base, color: '#4DD6A5' })
        }}
      />
    </div>
  );
};

CategorySelect.propTypes = {
  selectedCategory: PropTypes
    .shape({ value: PropTypes.number, label: PropTypes.string }),
  categories: PropTypes
    .arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })).isRequired,
  handler: PropTypes.func.isRequired
};
CategorySelect.defaultProps = {
  selectedCategory: {
    value: '',
    label: ''
  }
};

export default CategorySelect;
