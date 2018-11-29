import axios from 'axios';

import constants from '../constants';
const {
  REPORT_ARTICLE_LOADING,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE,
  CLEAR_REPORT_ARTICLE_MESSAGE,
} = constants;

const reportArticleLoading = loading => ({
  type: REPORT_ARTICLE_LOADING,
  payload: loading,
});

const reportArticleSuccess = message => ({
  type: REPORT_ARTICLE_SUCCESS,
  payload: message,
});

const reportArticleFailure = error => ({
  type: REPORT_ARTICLE_FAILURE,
  payload: error,
});

export const reportArticle = (
  articleId,
  violation,
  description
) => dispatch => {
  dispatch(reportArticleLoading(true));
  return axios
    .post(`/articles/${articleId}/report/cases`, { violation, description })
    .then(response => {
      dispatch(reportArticle(false));
      if (response.data.status === 'success') {
        return dispatch(reportArticleSuccess(response.data.data.message));
      }
      return dispatch(reportArticleSuccess(response.data));
    })
    .catch(error => {
      dispatch(reportArticleLoading(false));
      if (error.response) {
        return dispatch(reportArticleFailure(error.response.data.data.message));
      }
      return dispatch(reportArticleFailure('Server unreachable at the moment'));
    });
};

export const clearMessage = () => ({
  type: CLEAR_REPORT_ARTICLE_MESSAGE,
});
