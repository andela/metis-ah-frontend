import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

import AddComment from 'Components/compounds/AddComment';
import CommentsView from 'Components/compounds/CommentsView';

export class CommentBox extends React.Component {
  state = {};

  render() {
    return (
      <div id="comment-box">
        <AddComment />
        <CommentsView />
      </div>
    );
  }
}

// CommentBox.propTypes = {};

export default CommentBox;
