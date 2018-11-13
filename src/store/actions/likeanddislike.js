import axios from 'axios';
import constants from '../constants';

const {
  LIKE,
  LIKE_ERROR,
  DISLIKE,
  DISLIKE_ERROR
} = constants;
const likeDislike = (likeType, articleId) => (dispatch) => {
  if(likeType ==='like') {
    dispatch
  }
  axios.post(`/${articleId}/like/${likeType}`).then((res) => {

  })
    .catch(err => console.log('err :', err));
};

export default likeDislike;
