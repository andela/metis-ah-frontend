import constants from '../constants';

const {
  LIKE,
  LIKE_ERROR,
  DISLIKE,
  DISLIKE_ERROR
} = constants;

const initialState = {
  like: 0,
  dislike: 0,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        like: action.payload
      };
    case LIKE_ERROR:
      return {
        ...state,
        like: action.payload
      };
    case DISLIKE:
      return {
        ...state,
        dislike: action.payload
      };
    case DISLIKE_ERROR:
      return {
        ...state,
        dislike: action.payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;
