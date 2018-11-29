import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/store/actions/rateArticle';
import constants from '../../src/store/constants';

const {
  RATE_ARTICLE_STARTED,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE,
} = constants;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  userRating: 0,
  averageRating: 0,
  error: '',
  userRatingError: '',
};

describe('Rate article action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('dispatches RATE_ARTICLE_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          userRating: 1,
          averageRating: 1,
          error: '',
          userRatingError: '',
        },
      });

      const expectedAction = [
        { type: RATE_ARTICLE_STARTED },
        { type: RATE_ARTICLE_SUCCESS, userRating: 1, averageRating: 1 },
      ];
      const store = mockStore(initialState);
      return store.dispatch(actions.rateArticle(1, 1)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedAction);
      });
    });
  });

  it('dispatches RATE_ARTICLE_FAILURE', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: 'Server unreacheable at the moment',
      });

      const expectedAction = [
        { type: RATE_ARTICLE_STARTED },
        {
          type: RATE_ARTICLE_FAILURE,
          error: 'Server unreachable at the moment',
        },
      ];

      const store = mockStore(initialState);
      return store.dispatch(actions.rateArticle(1, 1)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedAction);
      });
    });
  });
});
