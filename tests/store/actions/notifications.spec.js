import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import constants from '../../../src/store/constants/index';
import * as actions from '../../../src/store/actions/notification';
import mockData from '../../__mocks__/notificationMock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const {
  GET_NOTIFICATION_STARTED,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
} = constants;

const initialState = {
  notifications: [],
  count: 1,
  error: '',
};

describe('Notification Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('dispatches GET_NOTIFICATION_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData,
      });

      const expectedAction = [
        { type: GET_NOTIFICATION_STARTED },
        { type: GET_NOTIFICATION_SUCCESS, payload: mockData },
      ];

      const store = mockStore(initialState);

      return store.dispatch(actions.getAllUnreadNotifications()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedAction);
      });
    });
  });

  it('dipatches GET_NOTIFICATION_ERROR', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: { error: 'Server is currently unreachable' },
      });

      const expectedAction = [
        { type: GET_NOTIFICATION_STARTED },
        {
          type: GET_NOTIFICATION_ERROR,
          payload: { error: 'Server is currently unreachable' },
        },
      ];

      const store = mockStore(initialState);

      return store.dispatch(actions.getAllUnreadNotifications()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedAction);
      });
    });
  });
});
