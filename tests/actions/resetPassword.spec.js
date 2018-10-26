
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { resetPassword, resetVerifiedUserPassword } from 'Actions/resetPasswordActions';
import {
  VERIFY_USER_EMAIL_SUCCESS,
  VERIFY_USER_EMAIL_STARTED,
  VERIFY_USER_EMAIL_FAILED,
  RESET_PASSWORD_STARTED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS
} from 'Constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  successMessage: '',
  errorMessage: '',
  isLoading: false
};
const email = 'jensmith@gmail.com';
const password = 'Password';
const token = 'kl87s9a4akslid898ds8a8f78sda97dsaa';

describe('PASSWORD RESET: EMAIL VERIFICATION TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch reset password success actions', (done) => {
    moxios.stubRequest('/users/auth/reset-password', {
      status: 200,
      response: {
        data: { message: 'Password reset link has been sent to your email' }
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: VERIFY_USER_EMAIL_STARTED },
      { type: VERIFY_USER_EMAIL_SUCCESS, message: 'Password reset link has been sent to your email' }
    ];

    const store = mockStore(initialState);
    store.dispatch(resetPassword(email))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  test('should dispatch VERIFY_USER_EMAIL_FAILED on server error', (done) => {
    moxios.stubRequest('/users/auth/reset-password', {
      status: 401,
      response: {
        message: 'Invalid credential supplied'
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: VERIFY_USER_EMAIL_STARTED },
      { type: VERIFY_USER_EMAIL_FAILED, message: 'Invalid credential supplied' }
    ];

    const store = mockStore(initialState);
    store.dispatch(resetPassword(email))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});

describe('PASSWORD RESET: PASSW0RD UPDATE', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch reset password success actions', (done) => {
    moxios.stubRequest(/users\/auth\/reset-password.*/, {
      status: 200,
      response: {
        data: { message: 'Password reset link has been sent to your email' }
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: RESET_PASSWORD_STARTED },
      { type: RESET_PASSWORD_SUCCESS, message: 'Password reset link has been sent to your email' }
    ];

    const store = mockStore(initialState);
    const history = [];
    store.dispatch(resetVerifiedUserPassword(password, token, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  test('should dispatch RESET_PASSWORD_FAILED on server error', (done) => {
    moxios.stubRequest(/users\/auth\/reset-password.*/, {
      status: 500,
      response: {
        data: {
          message: 'Server error'
        }
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: RESET_PASSWORD_STARTED },
      { type: RESET_PASSWORD_FAILED, message: 'Server error' }
    ];

    const store = mockStore(initialState);
    store.dispatch(resetVerifiedUserPassword(password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
