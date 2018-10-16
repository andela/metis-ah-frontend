import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Header from '../../src/components/compounds/header';

describe('Header', () => {
  const initStore = {
    categories: {
      categories: [
        'Home',
        'Tech',
        'FOOD'
      ],
      selected: 'HOME',
    },
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
