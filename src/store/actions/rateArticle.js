import axios from "axios";
import constants from "../constants";

const {
  RATE_ARTICLE_STARTED,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE,
} = constants;

const rateArticleStarted = () => ({
  type: RATE_ARTICLE_STARTED
});

const rateArticleSuccess = (averageRating, userRating) => ({
  type: RATE_ARTICLE_SUCCESS,
  averageRating,
  userRating
});

const rateArticleFailure = error => ({
  type: RATE_ARTICLE_FAILURE,
  error
});

export const rateArticle = (articleId, rating) => dispatch => {
  dispatch(rateArticleStarted());
  return axios
    .post(`/articles/${articleId}/rate`, {
      rating
    })
    .then(response => {
      if (response.data.status === "success") {
        const { userRating, averageRating } = response.data.data;
        return dispatch(rateArticleSuccess(averageRating, userRating.rating));
      }
      return dispatch(rateArticleSuccess(response.data.data));
    })
    .catch(error => {
      if (error.response) {
        return dispatch(rateArticleFailure(error.response.data.data));
      }
      return dispatch(rateArticleFailure("Server unreachable at the moment"));
    });
};
