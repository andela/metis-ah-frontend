import constants from '../constants';

const {
  GET_SINGLE_ARTICLE_STARTED,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAILED
} = constants;

const initialState = {
  article: null,
  loading: false,
  error: null
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ARTICLE_STARTED:
      return {
        ...state,
        loading: true,
        article: null
      };
    case GET_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.article
      };
    case GET_SINGLE_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default categoriesReducer;
