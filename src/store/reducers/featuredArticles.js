import actionTypes from '../constants';

const {
  UPDATE_FEATURED_SUCCESS,
  UPDATE_FEATURED_FAILURE
} = actionTypes;

const featArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FEATURED_SUCCESS:
      return action.payload;
    case UPDATE_FEATURED_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default featArticlesReducer;
