import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Categories from '../../src/components/compounds/Categories';

let store;
describe('Categories', () => {
  beforeEach(() => {
    const initStore = {
      categories: {
        categories: [
          {id: 1, name:  "category 1"},
          {id: 2, name:  "category 1"},
          {id: 3, name:  "category 1"},
          {id: 4, name:  "category 1"},
          {id: 5, name:  "category 1"},
          {id: 7, name:  "category 1"},
          {id: 8, name:  "category 1"},
          {id: 9, name:  "category 1"},
        ],
        selected: 'HOME',
      },
    };

    store = createStore(() => initStore);
  });

  it('should render the initial state', () => {
    const wrapper = shallow(<Provider store={store}><Categories /></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });
});
