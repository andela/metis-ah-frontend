import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Hero from '../../src/components/compounds/Hero';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Hero', () => {
  it('should contain the required texts', () => {
    const store = mockStore({
      authUser: {
        modalOpen: false,
        isAuthenticated: false,
        loading: false
      },
      article: {
        heroContent: {
          poster: 'banner',
          name: "AUTHOR'S HAVEN",
          description:
            'A community where readers and writers come together to share and discuss knowledge and ideas.',
          buttonIsVisible: false,
          className: 'hero'
        }
      }
    });
    const wrapper = mount(<Provider store={store}><BrowserRouter><Hero /></BrowserRouter></Provider>);

    expect(wrapper.find('h1').text()).toEqual('AUTHOR\'S HAVEN');
    expect(wrapper.find('p').text()).toEqual('A community where readers and writers come together to share and discuss knowledge and ideas.');
  });
});
