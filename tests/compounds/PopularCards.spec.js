import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import PopularCards from '../../src/components/compounds/PopularCards';

describe('', () => {
  const initState = {
    popularArticles: {
      popularArticles: [
        {
          title: 'First title',
          description: 'A mock description',
          date: 'Aug 30',
          likes: 2300,
          banner: 'image1',
          author: 'John Obi',
          authorImg: 'aImg1',
        },
        {
          title: 'Second title',
          description: 'Another mock description',
          date: 'Aug 30',
          likes: 2300,
          banner: 'image1',
          author: 'John Obi',
          authorImg: 'aImg1',
        }
      ]
    }
  };

  const store = createStore(() => initState);

  it('should render all elements', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <PopularCards />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
