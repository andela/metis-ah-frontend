import commentReducer from 'Reducers/commentReducer';
import constants from '../../src/store/constants';

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
  isCreateCommentLoading: false,
  isFetchCommentLoading: false
};

describe('COMMENT REDUCER TESTS', () => {
  test('should return default', () => {
    const state = commentReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set isLoading to true', () => {
    const state = commentReducer(initialState, { type: CREATE_COMMENT_STARTED });
    expect(state.isCreateCommentLoading).toEqual(true);
  });

  test('should create comment successfully on success action', () => {
    const state = commentReducer(initialState, { type: CREATE_COMMENT_SUCCESS, comment: {} });
    expect(state.comments).toEqual([{}]);
    expect(state.comment).toEqual({});
    expect(state.isCreateCommentLoading).toEqual(false);
  });

  test('should fail on failed action', () => {
    const state = commentReducer(initialState, { type: CREATE_COMMENT_FAILED });
    expect(state.isCreateCommentLoading).toEqual(false);
  });

  test('should set isFetchCommentLoading to true on fetch comment action', () => {
    const state = commentReducer(initialState, { type: VIEW_COMMENTS_STARTED });
    expect(state.isFetchCommentLoading).toEqual(true);
  });

  test('returns successfully on successful comment fetch action', () => {
    const state = commentReducer(initialState, { type: VIEW_COMMENTS_SUCCESS, comments: [{}, {}] });
    expect(state.isFetchCommentLoading).toEqual(false);
    expect(state.comments).toEqual([{}, {}]);
  });

  test('fails on failed action', () => {
    const state = commentReducer(initialState, { type: VIEW_COMMENTS_FAILED });
    expect(state.isFetchCommentLoading).toEqual(false);
  });

  test('clear comments on CLEAR_COMMENT action', () => {
    const state = commentReducer(initialState, { type: CLEAR_COMMENT });
    expect(state.comments).toEqual([]);
  });
});
