import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Component to be tested
import LoginButton from '../../src/components/atoms/LoginButton';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('LoginButton', () => {
  test('should render the correct text', () => {
    const store = mockStore({
      authUser: {
        modalOpen: false,
        isAuthenticated: false,
        loading: false
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <LoginButton />
      </Provider>
    );

    expect(wrapper.text()).toEqual('Login');
  });
});
