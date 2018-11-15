import React from 'react';
import './style.scss';

import AddComment from 'Components/compounds/AddComment';
import CommentsView from 'Components/compounds/CommentsView';

const CommentBox = () => (
  <div id="comment-box">
    <AddComment />
    <CommentsView />
  </div>
);

export default CommentBox;
