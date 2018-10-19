import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ArticleContainer from 'Components/compounds/ArticleContainer';
import initialState from '../../../__mocks__/articleContainerMock';

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
