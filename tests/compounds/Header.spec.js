import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Header from '../../src/components/compounds/Header';

describe('Header', () => {
  const initStore = {
    categories: {
      categories: [{
        id: 1,
        name: 'fashion',
        description: 'fashion house',
        poster: 'banner'
      }],
      selected: 'HOME',
    },
    authUser: {
      isAuthenticated: false
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
  };

  const store = createStore(() => initStore);

  it('should exist', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
