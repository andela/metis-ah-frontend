import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
  addComment,
  getComments,
  clearComment,
  likeComment,
} from 'Actions/commentActions';
import constants from '../../src/store/constants';

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
  LIKE_COMMENT_FAILURE,
} = constants;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  comment: {},
  comments: [],
  isCreateCommentLoading: false,
  isFetchCommentLoading: false,
};

const comment = 'What a very good write-up, keep it up';

describe('COMMENT ACTIONS TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch CREATE_COMMENT_SUCCESS', done => {
    moxios.stubRequest('/articles/2/comments', {
      status: 200,
      response: {
        data: { comment },
      },
    });

    // actions expected to be fired
    const expectedActions = [
      { type: CREATE_COMMENT_STARTED },
      { type: CREATE_COMMENT_SUCCESS, comment },
    ];

    const store = mockStore(initialState);
    store.dispatch(addComment(comment, 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  test('should dispatch VERIFY_USER_EMAIL_FAILED on server error', done => {
    moxios.stubRequest('/articles/3/comments', {
      status: 401,
      response: {
        message: 'Invalid credential supplied',
      },
    });

    // actions expected to be fired
    const expectedActions = [
      { type: CREATE_COMMENT_STARTED },
      { type: CREATE_COMMENT_FAILED },
    ];

    const store = mockStore(initialState);
    store.dispatch(addComment(comment, 3)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

describe('FETCH COMMENTS ACTIONS TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch VIEW_COMMENTS_SUCCESS on successful fetch comment action', () => {
    moxios.stubRequest('/articles/4/comments', {
      status: 200,
      response: {
        data: { comments: [{}] },
      },
    });

    // actions expected to be fired
    const expectedActions = [
      { type: VIEW_COMMENTS_STARTED },
      { type: VIEW_COMMENTS_SUCCESS, comments: [{}] },
    ];

    const store = mockStore(initialState);
    store.dispatch(getComments(4)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('should dispatch VIEW_COMMENTS_FAILED on server error', done => {
    moxios.stubRequest('/articles/5/comments', {
      status: 500,
      response: {
        data: {
          message: 'Server error',
        },
      },
    });

    // actions expected to be fired
    const expectedActions = [
      { type: VIEW_COMMENTS_STARTED },
      { type: VIEW_COMMENTS_FAILED },
    ];

    const store = mockStore(initialState);
    store.dispatch(getComments(5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  test('should dipatch CLEAR_COMMENT', () => {
    // actions expected to be fired
    const expectedAction = [{ type: CLEAR_COMMENT }];

    const store = mockStore(initialState);
    store.dispatch(clearComment());
    expect(store.getActions()).toEqual(expectedAction);
  });

  describe('LIKE COMMENTS ACTIONS', () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

    test('should dispatch LIKE_COMMENT_SUCCESS', () => {
      const mockData = {
        status: 'success',
        data: {
          message: 'Comment liked',
        },
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: mockData,
        });

        const expectedActions = [
          { type: LIKE_COMMENT_STARTED },
          { type: LIKE_COMMENT_SUCCESS, payload: mockData },
        ];

        const store = mockStore(initialState);

        return store.dispatch(likeComment(1, 1)).then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
      });
    });
  });
});
