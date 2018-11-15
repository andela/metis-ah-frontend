import axios from 'axios';
import Alert from 'Utils/helpers/alert';
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


export const addComment = (content, articleId) => async (dispatch) => {
  dispatch({
    type: CREATE_COMMENT_STARTED
  });

  try {
    const response = await axios.post(`/articles/${articleId}/comments`, { content });

    Alert.success('Comment was successfully added');
    return dispatch({
      type: CREATE_COMMENT_SUCCESS,
      comment: response.data.data.comment
    });
  } catch (error) {
    Alert.error(error.response.data.message);
    return dispatch({
      type: CREATE_COMMENT_FAILED,
    });
  }
};

export const getComments = articleId => async (dispatch) => {
  dispatch({
    type: VIEW_COMMENTS_STARTED
  });

  try {
    const response = await axios.get(`/articles/${articleId}/comments`);

    if (!response.data.data.comments.length > 0) {
      Alert.info('No comments have been added to this article. Be the first to comment');
    }
    return dispatch({
      type: VIEW_COMMENTS_SUCCESS,
      comments: response.data.data.comments
    });
  } catch (error) {
    Alert.error(error.response.data.data.message);
    return dispatch({
      type: VIEW_COMMENTS_FAILED,
    });
  }
};

export const clearComment = () => ({
  type: CLEAR_COMMENT
});
