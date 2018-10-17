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
          'Home',
          'Tech',
          'FOOD'
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
