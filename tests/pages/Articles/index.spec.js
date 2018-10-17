import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Articles from 'Pages/Articles';

const initialState = {
  article: {
    heroContent: {
      poster: 'banner',
      name: 'AUTHOR\'S HAVEN',
      description:
      'A community where readers and writers come together to share and discuss knowledge and ideas.',
      buttonIsVisible: true,
      className: 'hero'
    },
    loading: false,
    articles: [],
    error: ''
  },
  categories: {
    categories: [
      'HOME',
      'CULTURE',
      'FASHION',
      'BUSINESS',
      'MATHEMATICS',
      'PROGRAMMING',
      'ENTERTAINMENT',
      'SCIENCE',
      'POPULAR',
      'MORE'
    ],
    selected: 'HOME',
  }
};

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;

describe('article page test', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Articles />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the article page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
