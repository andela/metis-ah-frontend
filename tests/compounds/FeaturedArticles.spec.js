import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import FeaturedArticles from '../../src/components/compounds/featuredArticles';
import { exec } from 'child_process';

const initialStore = {
  featuredArticles: {
    featuredArticles: [
      {
        title: 'The Nature of Nature',
        date: 'Aug 30',
        img: 'image1',
      },
      {
        title: 'The Art of Making Money',
        date: 'Aug 30',
        img: 'image2',
      }
    ]
  }
};

const store = createStore(() => initialStore);

describe('FeaturedArticles', () => {
  it('should render the correct components', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <FeaturedArticles />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
