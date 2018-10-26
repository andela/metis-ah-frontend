import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ProfilePage from '../../../src/pages/Profile';
import ProfileHero from '../../../src/components/compounds/ProfileHero';

const initialState = {
  authUser: {
    modalOpen: false,
    isAuthenticated: false,
    loading: false
  },
  users: {
    loading: false,
    profile: {},

    id: 14,
    username: 'joeeasy',
    firstname: 'jehonadab',
    lastname: 'Okpukoro',
    email: 'joeeasy@gmail.com',
    bio: 'Hello, I am a senior software developer who lives in toronto canada',
    image: 'http://res.cloudinary.com/dbsxxymfz/image/upload/v1540713696/oozf6rndyrgptg3xoqy6.jpg',
    premium: null,
    isVerified: true,
    interests: [
      'runing',
      ' singing',
      ' climbing',
      ' jumping'
    ],
    roleId: 2,
    createdAt: '2018-10-26T11:38:51.791Z',
    updatedAt: '2018-10-28T11:01:55.505Z',
    articles: [],
    ratings: [],
    bookmarks: [],
    followed: [],
    follower: []

  },
  categories: {
    categories: [
      {
        description: 'It has become appallingly obvious that our technology has exceeded our humanity.',
        id: 1,
        name: 'FASHION',
        poster: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1539947552/eroooo_1.png'
      }
    ],
    selected: 'HOME',
  }
};

const initialState2 = {
  authUser: {
    modalOpen: false,
    isAuthenticated: false,
    loading: false
  },
  users: {
    loading: true,
    profile: {},

  },
  categories: {
    categories: [
      {
        description: 'It has become appallingly obvious that our technology has exceeded our humanity.',
        id: 1,
        name: 'FASHION',
        poster: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1539947552/eroooo_1.png'
      }
    ],
    selected: 'HOME',
  }
};

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;

const match = {
  params: {
    userId: '1'
  }
};
describe('Profile page test', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ProfilePage match={match} />
        </BrowserRouter>
      </Provider>
    );
  });
  it('profile page to', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Should show loader when fetching data', () => {
  beforeEach(() => {
    store = mockStore(initialState2);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ProfilePage match={match} />
        </BrowserRouter>
      </Provider>
    );
  });
  it('showing loading', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ProfileHero />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ProfileHero />
      </Provider>
    );
  });
  test('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('button').at(0).simulate('click'));
    expect(wrapper.find('button[type="submit"]').simulate('click'));
    wrapper.update();
  });

  it('showing loading', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
