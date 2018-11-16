import React from 'react';
import './style.scss';

const TagsDisplay = (props) => {
  const tags = props.tags.map(tag => <span key={tag.id}>{tag.name}</span>);

  return (
    props.tags.length && (
    <div className="tagsdisplay">
      <strong> Tags:</strong>
        {tags}
    </div>
    )
  );
};

export default TagsDisplay;
