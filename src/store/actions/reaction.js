import axios from 'axios';
import constants from '../constants';
import { showModal } from './authUser';

const {
  GET_REACTION,
  GET_REACTION_ERROR,
  LIKE,
  LIKE_ERROR
} = constants;

const user = JSON.parse(localStorage.getItem('user'));
const token = (user) ? user.token : '';

const userReaction = (reactionType, articleId) => dispatch => axios.post(`/articles/${articleId}/like/${reactionType}`, {
  headers: {
    Authorization: token
  }
}).then(res => dispatch({
  type: LIKE,
  payload: res.data.data.reaction
}))
  .catch((err) => {
    if (err.reponse) {
      if (err.response.status === 401) {
        dispatch({
          type: LIKE_ERROR,
          payload: err.data.data.reaction
        });
      }
    }
  });

const getReaction = articleId => dispatch => axios.get(`/articles/${articleId}/like/`, {
  headers: {
    Authorization: token
  }
}).then((res) => {
  dispatch({
    type: GET_REACTION,
    payload: {
      liked: res.data.data.userReaction.liked,
      disliked: res.data.data.userReaction.disliked
    }
  });
}).catch((err) => {
  if (err.reponse) {
    if (err.reponse.status === 404) {
      dispatch({
        type: GET_REACTION_ERROR,
        payload: err.reponse.data.data
      });
    }
  }
});


export { userReaction, getReaction };
