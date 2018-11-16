import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import timePast from 'time_past';
import _ from 'underscore';

const CommentCard = (props) => {
  const { comment } = props;
  const name = `${comment.user.firstname} ${comment.user.lastname}`;
  const userImage = 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png';
  return (
    <Fragment>
      <div id="comments-view">
        <div className="comment-body">
          {_.unescape(comment.content)}
        </div>
        <div className="comment-footer">
          <img src={comment.user.image || userImage} alt="userImage" />
          <p className="userName">
            <Link to={`/users/${comment.user.id}`}>{name.trim() ? name : comment.user.username}</Link>
          </p>
          <p className="time-ago">
            {timePast(comment.createdAt)}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentCard;
