import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createUser } from '../../src/store/actions/authUser';
import Login from '../../src/components/compounds/LoginForm';
import formValid from '../../src/util/helpers/LoginFormValid';

Enzyme.configure({ adapter: new Adapter() });

const url = `${process.env.BASE_URL}/users/auth/login`;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Login />', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  describe('login-authAction', () => {
    test('should dispatch login action', (done) => {
      const newUser = {
        data: {
          data: {
            message: 'hello data',
            token: 'e1dsjfnjeonfoifhe8e4'
          }
        }
      };

      // Stub and intercept API request
      moxios.stubRequest(url, {
        status: 200,
        response: newUser
      });

      // actions expected to be fired
      const expectedActions = [
        { type: 'USER_SIGNUP_STARTED' },
        { payload: newUser.data, type: 'SET_CURRENT_USER' },
        { type: 'MODAL_CLOSE' }
      ];

      const userProfile = {
        email: 'danielemail@gmail.com',
        password: 'Mypassword'
      };

      const store = mockStore({});
      store
        .dispatch(createUser(userProfile))
        .then(() => {
          // expect actions fired to equal expected actions
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });

  describe('TEST RENDER COMPONENT', () => {
    test('renders the component', () => {
      const store = mockStore({
        authUser: {
          modalOpen: false,
          isAuthenticated: false,
          loading: false
        },
      });
      const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>
      );

      expect(wrapper.find('form').exists()).toBe(true);
      expect(wrapper.find('input').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(true);
    });
  });

  const loginDetails = {
    email: '',
    password: ''
  };
  describe('Form Validation', () => {
    let result;

    it('should return a boolean', () => {
      result = formValid(loginDetails);
      expect(result).toBe(false);
    });
  });
});
