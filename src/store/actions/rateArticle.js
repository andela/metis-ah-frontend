import axios from "axios";
import constants from "../constants";

const {
  RATE_ARTICLE_STARTED,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE,
  GET_USER_RATING_STARTED,
  GET_USER_RATING_SUCCESS,
  GET_USER_RATING_FAILURE
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

const getUserRatingStarted = () => ({
  type: GET_USER_RATING_STARTED
});

const getUserRatingSuccess = userRating => ({
  type: GET_USER_RATING_SUCCESS,
  userRating
});

const getUserRatingFailure = userRatingError => ({
  type: GET_USER_RATING_FAILURE,
  userRatingError
});

export const getUserRating = articleId => dispatch => {
  dispatch(getUserRatingStarted());
  return axios
    .get(`/articles/${articleId}/user-rating`)
    .then(response => {
      if (response.data.status === "success") {
        return dispatch(getUserRatingSuccess(response.data.data.userRating));
      }
      return getUserRatingSuccess(response.data.data);
    })
    .catch(error => {
      if (error.response) {
        return dispatch(getUserRatingFailure(error.response.data.data.message));
      }
      return dispatch(getUserRatingFailure("Server unreachable at the moment"));
    });
};

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
