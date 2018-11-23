import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getComments, clearComment } from "Actions/commentActions";
import { withRouter } from "react-router-dom";

import "./style.scss";
import PropTypes from "prop-types";
import CommentCard from "Atoms/CommentCard";

export class CommentsView extends React.Component {
  state = {};

  componentWillMount() {
    const { clearComment } = this.props;
    return clearComment();
  }

  viewComments = () => {
    const { getComments, match } = this.props;
    const { articleId } = match.params;
    return getComments(articleId);
  };

  render() {
    const { comments, isFetchCommentLoading, loggedInUserId } = this.props;

    return (
      <Fragment>
        <div
          id="comments-view-button"
          onClick={this.viewComments}
          aria-hidden="true"
          style={isFetchCommentLoading ? { opacity: 0.6 } : null}
          disabled={isFetchCommentLoading}
        >
          <h1>
            {
              <i
                id="spinner"
                className={
                  isFetchCommentLoading ? "fas fa-spinner fa-spin" : ""
                }
              />
            }{" "}
            View Comments
          </h1>
        </div>

        {comments.length > 0
          ? comments.map(comment => (
              <CommentCard
                key={comment.id}
                comment={comment}
                articleId={comment.articleId}
                commentId={comment.id}
                loggedInUserId={loggedInUserId}
              />
            ))
          : null}
      </Fragment>
    );
  }
}

CommentsView.defaultProps = {
  comments: [],
  isFetchCommentLoading: false
};

CommentsView.propTypes = {
  getComments: PropTypes.func.isRequired,
  clearComment: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  isFetchCommentLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
  isFetchCommentLoading: state.comments.isFetchCommentLoading,
  loggedInUserId: state.authUser.user.id
});

export default withRouter(
  connect(
    mapStateToProps,
    { getComments, clearComment }
  )(CommentsView)
);
