import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { createUser } from '../../src/store/actions/authUser';
import Signup from '../../src/components/compounds/Signup/Signup';
import Modal from '../../src/components/atoms/Modal';
import formValid from '../../src/util/helpers/formValid';
import BASE_URL from '../../url.json';

Enzyme.configure({ adapter: new Adapter() });


const url = `${BASE_URL}/users/auth/signup`;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Signup />', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  describe('authAction', () => {
    test('should dispatch signup action', (done) => {
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
        status: 201,
        response: newUser
      });

      // actions expected to be fired
      const expectedActions = [
        { type: 'USER_SIGNUP_STARTED' },
        { payload: newUser.data, type: 'SIGNUP_SUCCESS' },
        { type: 'MODAL_CLOSE' }
      ];

      const userProfile = {
        username: 'daniel',
        email: 'danielemail@andel.com',
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

  describe('render()', () => {
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
            <Signup />
          </BrowserRouter>
        </Provider>
      );

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('form').exists()).toBe(true);
      expect(wrapper.find('input').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(true);
    });
  });

  describe('<Modal />', () => {
    test('renders the component', () => {
      const wrap = mount(<Modal />);

      expect(wrap.exists()).toBe(true);
      expect(wrap.find('div').exists()).toBe(true);
    });
  });

  const userDetails = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  describe('Form Validation', () => {
    let result;

    it('should return a boolean', () => {
      result = formValid(userDetails);
      expect(result.formIsValid).toBe(false);
    });

    it('should ensure username is not empty', () => {
      result = formValid(userDetails);
      expect(result.errors.username).toBe('Username Cannot be empty');
    });
    it('should ensure email is valid', () => {
      userDetails.email = 'daniel.com';
      result = formValid(userDetails);
      expect(result.errors.email).toBe('Email is not valid');
    });
    it('should ensure password is not less that eight characters', () => {
      userDetails.password = 'Daniel';
      userDetails.confirmPassword = 'Daniel';
      result = formValid(userDetails);
      expect(result.errors.password).toBe('Password is less than eight characters');
    });
    it('should ensure password contain at least one uppercase letter', () => {
      userDetails.password = 'daniel';
      userDetails.confirmPassword = 'daniel';
      result = formValid(userDetails);
      expect(result.errors.password).toBe('Password should contain at least one uppercase letter');
    });
    it('should ensure password match confirm password', () => {
      userDetails.password = 'password';
      userDetails.confirmPassword = 'Password';
      result = formValid(userDetails);
      expect(result.errors.password).toBe('Your password does not match confirm password');
    });
  });
});
