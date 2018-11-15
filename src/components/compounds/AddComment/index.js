import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addComment } from 'Actions/commentActions';

import InputField from 'Atoms/InputField/InputField';
import { showModal } from 'Actions/authUser';
import Alert from 'Utils/helpers/alert';
import './style.scss';

export class AddComment extends React.Component {
  state = {
    content: ''
  };


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { content } = this.state;
    const { isAuth, showModal } = this.props;

    if (content.length < 2) {
      return Alert.error('Please, enter a comment');
    }
    if (!isAuth) {
      Alert.info('Hi there, you need to be registered or logged in to comment');
      return showModal();
    }
    const { match, addComment } = this.props;
    const { articleId } = match.params;
    return addComment(content, articleId).then(() => {
      this.setState({
        content: ''
      });
    });
  }

  render() {
    const { content } = this.state;
    const { isCreateCommentLoading } = this.props;
    return (
      <div id="add-comment-view">
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            name="content"
            placeholder="Write a comment"
            rows="10"
            cols="30"
            value={content}
          />
          <div className="input-container">
            <i id="spinner" className={isCreateCommentLoading ? 'fas fa-spinner fa-spin' : ''} />
            <InputField
              type="submit"
              value="Comment"
              style={isCreateCommentLoading ? { opacity: 0.3 } : null}
              disabled={isCreateCommentLoading}
            />
          </div>
        </form>
      </div>
    );
  }
}

AddComment.defaultProps = {
  isCreateCommentLoading: false
};

AddComment.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  addComment: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isCreateCommentLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated,
  isCreateCommentLoading: state.commentReducer.isCreateCommentLoading
});

export default withRouter(connect(
  mapStateToProps,
  { addComment, showModal }
)(AddComment));
