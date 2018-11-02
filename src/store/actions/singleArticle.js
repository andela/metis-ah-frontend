import axios from 'axios';
import constants from '../constants';

const {
  GET_SINGLE_ARTICLE_STARTED,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAILED
} = constants;

const getSingleArticleStarted = () => ({
  type: GET_SINGLE_ARTICLE_STARTED ,
});

export const getSingleArticleSuccess = article => ({
  type: GET_SINGLE_ARTICLE_SUCCESS,
  article
});

const getSingleArticleFailed = error => ({
  type: GET_SINGLE_ARTICLE_FAILED,
  error
});

export const getSingleArticle = articleId => (dispatch) => {
  dispatch(getSingleArticleStarted());
  return axios.get(`/articles/${articleId}`)
    .then((response) => {
      dispatch(getSingleArticleSuccess(response.data.data));
    })
    .catch((error) => {
      if (error.response.data.data.message) {
        dispatch(getSingleArticleFailed(error.response.data.data.message));
      } else {
        dispatch(getSingleArticleFailed(error.message));
      }
    });
};
