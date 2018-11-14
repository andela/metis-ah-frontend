import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import CreateArticle from '../../../src/pages/CreateArticle';


const initialState = {
  createArticle: {
    tags: [],
    error: null,
    loading: false
  },
  categories: {
    categories: []
  },
  authUser: {
    isAuthenticated: true,
    user: {
      image: 'imageUrl.jpg'
    }
  },
  notification: {
    notifications: [], 
    count: 0, 
    error: ''
  }
};

const innerState = {
  menu: false,
  articleDescription: '',
  articleTitle: '',
  articleBody: '',
  selectedCategory: {},
  selectedTag: [],
  articleBanner: null,
  autoSave: false,
  error: null,
  bannerName: null,
};


jest.mock('@ckeditor/ckeditor5-react');

jest.mock('@ckeditor/ckeditor5-build-balloon/build/ckeditor');

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
describe('create article page test', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CreateArticle />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the create article page correctly', () => {
    wrapper.setState({ ...innerState });
    wrapper.find('button').find('.publish').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
