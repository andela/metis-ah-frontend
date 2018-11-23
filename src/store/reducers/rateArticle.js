import rateArticle from '../actions/rateArticle';
import constants from '../constants';

const {
  RATE_ARTICLE_STARTED,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE
} = constants;

const initialState = {
  error: '',
  averageRating: 0
}

const rateArticle = (state = initialState, action) => {
  switch (key) {
    case RATE_ARTICLE_STARTED:
      return {
        ...state
      }
    case RATE_ARTICLE_SUCCESS:
      return {
        ...state,
        averageRating: action.payload
      }
    case RATE_ARTICLE_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
};

export default rateArticle;
