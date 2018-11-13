import constants from '../constants';

const {
  CREATE_COMMENT_STARTED,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  VIEW_COMMENTS_STARTED,
  VIEW_COMMENTS_SUCCESS,
  VIEW_COMMENTS_FAILED,
  CLEAR_COMMENT
} = constants;

const initialState = {
  comment: {},
  comments: [],
  isCommentLoading: false
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT_STARTED:
      return {
        ...state,
        isCommentLoading: true
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.comment,
        comments: [action.comment, ...state.comments],
        isCommentLoading: false
      };
    case CREATE_COMMENT_FAILED:
      return {
        ...state,
        isCommentLoading: false
      };

    case VIEW_COMMENTS_STARTED:
      return {
        ...state,
        isCommentLoading: true
      };
    case VIEW_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        isCommentLoading: false
      };
    case VIEW_COMMENTS_FAILED:
      return {
        ...state,
        isCommentLoading: false
      };
    case CLEAR_COMMENT:
      return {
        ...state,
        comments: []
      };
    default:
      return state;
  }
};

export default commentReducer;
