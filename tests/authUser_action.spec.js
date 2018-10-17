import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { socialAuth } from '../src/store/actions/authUser';

Enzyme.configure({ adapter: new Adapter() });

const urlGoogle = '/users/auth/google/redirect?code=sijdnvsdkvjbdsvlasdkjv';
const urlFacebook = '/users/auth/facebook/redirect?code=sijdnvsdkvjbdsvlasdkjv';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const expectedAction = [
  {
    type: 'SET_CURRENT_USER',
    payload: {
      status: 'success',
      data: 'some random data',
    }
  }
];

describe('authUser actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('google should trigger the correct actions', (done) => {
    moxios.stubRequest(urlGoogle, {
      status: 200,
      response: {
        data: {
          data: 'some random data',
          status: 'success',
        }
      },
    });

    const store = mockStore({
      user: {},
      isAuthenticated: false,
    });

    store
      .dispatch(socialAuth('google', { code: 'sijdnvsdkvjbdsvlasdkjv' }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        done();
      });
  });

  it('facebook should trigger the correct actions', (done) => {
    moxios.stubRequest(urlFacebook, {
      status: 200,
      response: {
        data: {
          data: 'some random data',
          status: 'success',
        }
      },
    });

    const store = mockStore({
      user: {},
      isAuthenticated: false,
    });
    store
      .dispatch(socialAuth('facebook', { code: 'sijdnvsdkvjbdsvlasdkjv' }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        done();
      });
  });
});
