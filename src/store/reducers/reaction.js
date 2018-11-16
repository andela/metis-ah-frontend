import constants from '../constants';

const {
  GET_REACTION,
  GET_REACTION_ERROR,
  DISLIKE,
  DISLIKE_ERROR
} = constants;

const initialState = {
  reaction: {},
  likesCount: 0,
  dislikeCount: 0

};

const getReactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REACTION:
      return {
        ...state,
        reaction: action.payload
      };
    case GET_REACTION_ERROR:
      return {
        ...state,
        reaction: action.payload
      };
    default:
      return state;
  }
};

export default getReactionReducer;
