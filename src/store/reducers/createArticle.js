import constants from '../constants';

const {
  SAVE_ARTICLE_STARTED,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILED,
  SAVE_TAGS
} = constants;

const initialState = {
  tags: [],
  error: null,
  loading: false,
  message: null
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ARTICLE_STARTED:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SAVE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.message
      };

    case SAVE_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case SAVE_TAGS:
      return {
        ...state,
        tags: action.tags
      };
    default:
      return state;
  }
};

export default articleReducer;
