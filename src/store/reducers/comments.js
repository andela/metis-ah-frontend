import constants from "../constants";

const {
  CREATE_COMMENT_STARTED,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  VIEW_COMMENTS_STARTED,
  VIEW_COMMENTS_SUCCESS,
  VIEW_COMMENTS_FAILED,
  CLEAR_COMMENT,
  LIKE_COMMENT_STARTED,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE
} = constants;

const initialState = {
  comment: {},
  comments: [],
  isCreateCommentLoading: false,
  isFetchCommentLoading: false
};

// filter the likes array to get likes that have true value
const likesCount = comment => {
  if (comment.likes.length > 0) {
    return comment.likes.filter(reaction => {
      return reaction.liked === true;
    }).length;
  }
};

// get the liksCount for each comment
const mappedComments = comments =>
  comments.map(comment => {
    comment.likesCount = likesCount(comment);
    return comment;
  });

const comments = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT_STARTED:
      return {
        ...state,
        isCreateCommentLoading: true
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.comment,
        comments: [action.comment, ...state.comments],
        isCreateCommentLoading: false
      };
    case CREATE_COMMENT_FAILED:
      return {
        ...state,
        isCreateCommentLoading: false
      };

    case VIEW_COMMENTS_STARTED:
      return {
        ...state,
        isFetchCommentLoading: true
      };
    case VIEW_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: mappedComments(action.comments),
        isFetchCommentLoading: false
      };
    case VIEW_COMMENTS_FAILED:
      return {
        ...state,
        isFetchCommentLoading: false
      };
    case CLEAR_COMMENT:
      return {
        ...state,
        comments: []
      };
    case LIKE_COMMENT_STARTED:
      return {
        ...state
      };
    case LIKE_COMMENT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        comments: mappedComments(action.comments),
      };
    case LIKE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default comments;
