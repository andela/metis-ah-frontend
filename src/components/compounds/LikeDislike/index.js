import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './style.scss';

class LikeAndDisLike extends Component {
  state = {
    likes: this.props.likes,
    dislikes: this.props.dislikes
  };

  handleLikeAndDislike = (event) => {
    event.preventDefault();
    const likeType = event.currentTarget.value;
    const target = event.currentTarget;
    if (likeType === 'like') {
      if (target.classList.contains('active')) {
        this.setState(state => ({
          likes: state.likes - 1
        }));
        target.classList.toggle('active');
      } else {
        this.setState(state => ({
          likes: state.likes + 1
        }));
        event.currentTarget.classList.toggle('active');
      }
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
      } else {
        this.setState(state => ({
          dislikes: state.dislikes + 1
        }));
        event.currentTarget.classList.toggle('active');
      }
      if (target.previousElementSibling.classList.contains('active')) {
        this.setState(state => ({
          likes: state.likes - 1
        }));
        return target.previousElementSibling.classList.toggle('active');
      }
    }
  }

  render() {
    const { likes, dislikes } = this.state;
    return (
      <div className="LikeDislike">
        <button type="button" className="like" value="like" onClick={this.handleLikeAndDislike}>
          <i className="fas fa-thumbs-up" />
          {' '}
          <span>{ likes }</span>
        </button>
        <button type="button" className="dislike" value="dislike" onClick={this.handleLikeAndDislike}>
          <i className="fas fa-thumbs-down" />
          {' '}
          <span>{ dislikes }</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ singleArticle: { article: { metadata: { likes, dislikes } } } }) => ({
  likes,
  dislikes
});


export default connect(mapStateToProps)(withRouter(LikeAndDisLike));
