import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import FooterCategories from '../../src/components/compounds/FooterCategories';

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

describe('Categories', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <FooterCategories />
      </BrowserRouter>
    </Provider>
  );

  it('render', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
