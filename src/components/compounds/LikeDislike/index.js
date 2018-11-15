import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './style.scss';
import { getReaction, userReaction } from '../../../store/actions/reaction';
import { showModal } from '../../../store/actions/authUser';

class LikeAndDisLike extends Component {
  state = {
    likes: this.props.likes,
    dislikes: this.props.dislikes,
  };

  componentDidMount = () => {
    const { getUserReaction, match: { params: { articleId } } } = this.props;
    getUserReaction(articleId);
  }


  handleLikeAndDislike = (event) => {
    event.preventDefault();
    const { reaction, match: { params: { articleId } }, showLoginModal } = this.props;

    const reactionType = event.currentTarget.value;
    const target = event.currentTarget;
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : '';
    if (!token) {
      return showLoginModal();
    }
    if (reactionType === 'like') {
      if (target.classList.contains('active')) {
        this.setState(state => ({
          likes: state.likes - 1
        }));
        target.classList.toggle('active');
        return reaction('resetReaction', articleId);
      }
      this.setState(state => ({
        likes: state.likes + 1
      }));
      event.currentTarget.classList.toggle('active');
      reaction(reactionType, articleId);

      if (target.nextSibling.classList.contains('active')) {
        this.setState(state => ({
          dislikes: state.dislikes - 1
        }));
        return target.nextSibling.classList.toggle('active');
      }
    } else {
      if (target.classList.contains('active')) {
        this.setState(state => ({
          dislikes: state.dislikes - 1
        }));
        target.classList.toggle('active');
        return reaction('resetReaction', articleId);
      }
      this.setState(state => ({
        dislikes: state.dislikes + 1
      }));
      event.currentTarget.classList.toggle('active');
      reaction(reactionType, articleId);

      if (target.previousElementSibling.classList.contains('active')) {
        this.setState(state => ({
          likes: state.likes - 1
        }));
        return target.previousElementSibling.classList.toggle('active');
      }
    }
  }

  render() {
    const {
      likes, dislikes,
    } = this.state;
    const { liked, disliked } = this.props;
    return (
      <div className="LikeDislike">
        <button type="button" className={`like ${liked ? 'active' : ''}`} value="like" onClick={this.handleLikeAndDislike}>
          <i className="fas fa-thumbs-up" />
          {' '}
          <span>{ likes }</span>
        </button>
        <button type="button" className={`dislike ${disliked ? 'active' : ''}`} value="dislike" onClick={this.handleLikeAndDislike}>
          <i className="fas fa-thumbs-down" />
          {' '}
          <span>{ dislikes }</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (
  {
    singleArticle: { article: { metadata: { likes, dislikes } } },
    reaction: { reaction: { liked, disliked } }
  }
) => ({
  likes,
  dislikes,
  liked,
  disliked
});

const mapDispatchToProps = dispatch => ({
  getUserReaction: articleId => dispatch(getReaction(articleId)),
  reaction: (reactionType, articleId) => dispatch(userReaction(reactionType, articleId)),
  showLoginModal: () => dispatch(showModal())
});

LikeAndDisLike.propTypes = {
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  getUserReaction: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  reaction: PropTypes.func.isRequired,
  showLoginModal: PropTypes.func.isRequired,
  liked: PropTypes.bool,
  disliked: PropTypes.bool,

};

LikeAndDisLike.defaultProps = {
  liked: false,
  disliked: false
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LikeAndDisLike));
