import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ArticleContainer from 'Components/compounds/ArticleContainer';

const initialState = {
  article: {
    articles: [
      {
        slug: 'asasa',
        imageUrl: 'rectangle1',
        title: "The Internet's problems Can't Be solved with an Algorithm",
        description: "We can't Keep blaming behavior on the robots",
        createdAt: '23-09-2018',
        User: {
          firstname: 'Tomi',
          lastname: 'Adebanjo'
        }
      },
      {
        slug: 'asasaa',
        imageUrl: 'rectangle2',
        title: "The Internet's problems Can't Be solved with an Algorithm",
        description: "We can't Keep blaming behavior on the robots",
        createdAt: '23-09-2018',
        User: {
          firstname: 'Tomi',
          lastname: 'Adebanjo'
        }
      }
    ],
    loading: false
  }
};

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
let timeFormat;

describe('article container component test', () => {
  beforeEach(() => {
    timeFormat = jest.fn();
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ArticleContainer timeFormat={timeFormat} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render the article container correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
