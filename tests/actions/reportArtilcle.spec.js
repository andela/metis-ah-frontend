import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import constants from '../../src/store/constants/index';
import * as actions from '../../src/store/actions/reportArticle';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const {
  REPORT_ARTICLE_LOADING,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE,
  CLEAR_REPORT_ARTICLE_MESSAGE,
} = constants;

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const mockData = {
  articleId: 1,
  reasonForReport: 'Plagiarism',
  description: 'Article contains plagiarism',
};

describe('Report Article action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('dispatches REPORT_ARTICLE_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'This case has been recorded and will be reviewed',
      });

      const expectedAction = [
        { type: REPORT_ARTICLE_LOADING, payload: true },
        { type: REPORT_ARTICLE_LOADING, payload: false },
        {
          type: REPORT_ARTICLE_SUCCESS,
          payload: 'This case has been recorded and will be reviewed',
        },
        { type: CLEAR_REPORT_ARTICLE_MESSAGE },
      ];

      const store = mockStore(initialState);
      return store
        .dispatch(
          actions.reportArticle(1, 'Plagiarism', 'Article contains plagiarsim')
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedAction);
        });
    });
  });

  it('dispatches REPORT_ARTICLE_FAILURE', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: 'You have reported this article already',
      });

      const expectedAction = [
        { type: REPORT_ARTICLE_LOADING, payload: true },
        { type: REPORT_ARTICLE_LOADING, payload: false },
        {
          type: REPORT_ARTICLE_FAILURE,
          payload: 'You have reported this article already',
        },
        { type: CLEAR_REPORT_ARTICLE_MESSAGE },
      ];

      const store = mockStore(initialState);

      return store
        .dispatch(
          actions.reportArticle(1, 'Plagiarism', 'Article contains plagiarsim')
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedAction);
        });
    });
  });

  it('dispatches REPORT_ARTICLE_FAILURE', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: 'Server unreachable at the monent',
      });

      const expectedAction = [
        { type: REPORT_ARTICLE_LOADING, payload: true },
        { type: REPORT_ARTICLE_LOADING, payload: false },
        {
          type: REPORT_ARTICLE_FAILURE,
          payload: 'Server unreachable at the monent',
        },
      ];

      const store = mockStore(initialState);

      return store
        .dispatch(
          actions.reportArticle(1, 'Plagiarism', 'Article contains plagiarsim')
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedAction);
        });
    });
  });
});
