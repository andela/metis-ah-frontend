import axios from "axios";
import constants from "../constants";

const {
  RATE_ARTICLE_STARTED,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE
} = constants;

const rateArticleStarted = () => ({
  type: RATE_ARTICLE_STARTED
});

const rateArticleSuccess = data => ({
  type: RATE_ARTICLE_SUCCESS,
  payload: data
});

const rateArticleFailure = error => ({
  type: RATE_ARTICLE_FAILURE,
  payload: error
});

const rateArticle = articleId => dispatch => {
  dispatch(rateArticleStarted());
  return axios.post(`/articles/${articleId}/rate`).then(response => {
    if (response.data.success === "success") {
      return dispatchEvent(rateArticleSuccess(response.data.data));
    }
    return dispatchEvent(rateArticleSuccess(response.data.data));
  })
  .catch(error => {
    if (error.response) {
      return dispatch(rateArticleFailure(error.response.data.data));
    }
    return dispatch(rateArticleFailure('Server unreachable at the moment'))
  });
};

export default rateArticle;
