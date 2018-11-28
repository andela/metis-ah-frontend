import constants from "../constants";

const {
  GET_USER_RATING_STARTED,
  GET_USER_RATING_SUCCESS,
  GET_USER_RATING_FAILURE,
  RATE_ARTICLE_STARTED,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE
} = constants;

const initialState = {
  error: "",
  userRatingError: "",
  userRating: 0,
  averageRating: 0
};

const rateArticle = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_RATING_STARTED:
      return {
        ...state
      };
    case GET_USER_RATING_SUCCESS:
      return {
        ...state,
        userRating: action.userRating
      };
    case GET_USER_RATING_FAILURE:
      return {
        ...state,
        userRatingError: action.userRatingError
      };
    case RATE_ARTICLE_STARTED:
      return {
        ...state
      };
    case RATE_ARTICLE_SUCCESS:
      return {
        ...state,
        averageRating: action.averageRating,
        userRating: action.userRating
      };
    case RATE_ARTICLE_FAILURE: {
      return {
        ...state,
        error: action.error
      };
    }
    default:
      return state;
  }
};

export default rateArticle;
