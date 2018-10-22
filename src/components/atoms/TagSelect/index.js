import React from 'react';
import PropTypes from 'prop-types';
import TagSelector from 'react-select/lib/Creatable';
import './style.scss';

const TagSelect = (props) => {
  const { handler, tags, selectedTag } = props;
  const allTags = tags.map(tag => (
    { value: tag.name, label: tag.name }
  ));
  return (
    <TagSelector
      value={selectedTag}
      className="TagSelector"
      onChange={handler}
      options={allTags}
      isMulti
      placeholder="Add Tags ... (You can create your own tags)"
      isClearable
      styles={{
        option: (base, { isFocused, isSelected }) => ({
          ...base,
          backgroundColor: isFocused ? '#4DD6A5' : isSelected
            ? '#4DD6A5' : '#fff',
          color: isFocused || isSelected ? '#fff' : '#4DD6A5'
        })
      }}
    />
  );
};
TagSelect.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
  selectedTag: PropTypes
    .arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  handler: PropTypes.func.isRequired
};

export default TagSelect;
