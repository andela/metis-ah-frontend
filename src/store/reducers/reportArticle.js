import constants from '../constants';

const {
  REPORT_ARTICLE_LOADING,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE,
  CLEAR_REPORT_ARTICLE_MESSAGE,
} = constants;

const initialState = {
  message: '',
  error: '',
  loading: false,
};

const reportArticle = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_ARTICLE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case REPORT_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case REPORT_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_REPORT_ARTICLE_MESSAGE:
      return {
        ...state,
        loading: false,
        error: '',
        message: '',
      };
    default:
      return state;
  }
};

export default reportArticle;
