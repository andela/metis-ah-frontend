import actionTypes from '../constants';

const {
  UPDATE_AUTHORS_SUCCESS,
  UPDATE_AUTHORS_FAILURE
} = actionTypes;

const popularAuthors = (state = [], action) => {
  switch (action.type) {
    case UPDATE_AUTHORS_SUCCESS:
      return action.payload;
    case UPDATE_AUTHORS_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default popularAuthors;
