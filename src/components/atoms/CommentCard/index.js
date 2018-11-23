import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import timePast from "time_past";
import _ from "underscore";
import {
  likeComment,
  getComments
} from "Actions/commentActions";

class CommentCard extends Component {
  handleClick = async () => {
    const { handleLike, articleId, commentId, fetchComments } = this.props;

    await handleLike(articleId, commentId);

    setTimeout(() => {
      fetchComments(articleId);
    }, 300);

  };

  render() {
    const { comment, loggedInUserId } = this.props;
    const isCommentLikedByUser = comment.likes.some(reaction => {
      return reaction.userId === loggedInUserId && reaction.liked === true;
    });

    const name = `${comment.user.firstname} ${comment.user.lastname}`;
    const userImage =
      "https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png";

    return (
      <Fragment>
        <div id="comments-view">
          <div className="comment-footer">
            <img src={comment.user.image || userImage} alt="userImage" />
            <p className="userName">
              <Link to={`/users/${comment.user.id}`}>
                {name.trim() ? name : comment.user.username}
              </Link>
            </p>
            <p className="time-ago">{timePast(comment.createdAt)}</p>
          </div>
          <div className="comment-body">{_.unescape(comment.content)}</div>
          <div className="comment__likes" onClick={this.handleClick}>
            <span className={`like ${isCommentLikedByUser ? 'active': ''}`}>
              <i className='fas fa-thumbs-up' />
            </span>
            {comment.likesCount > 0 ? (
              <span className="likes_count">{comment.likesCount}</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

CommentCard.propTypes = {
  handleLike: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleLike(articleId, commentId) {
    dispatch(likeComment(articleId, commentId));
  },
  fetchComments(articleId) {
    dispatch(getComments(articleId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentCard);
