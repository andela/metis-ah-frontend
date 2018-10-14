import actionTypes from '../constants';

const {
  UPDATE_POPULAR_SUCCESS,
  UPDATE_POPULAR_FAILURE
} = actionTypes;

const popularArticles = (state = [], action) => {
  switch (action.type) {
    case UPDATE_POPULAR_SUCCESS:
      return action.payload;
    case UPDATE_POPULAR_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default popularArticles;
