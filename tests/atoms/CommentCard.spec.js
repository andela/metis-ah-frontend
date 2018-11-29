import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn(param);

import CommentCard from '../../src/components/atoms/CommentCard';

const props = {
  comment: {
    id: 9,
    content: 'Thanks',
    edited: false,
    createdAt: '2018-11-13T16:13:29.901Z',
    updatedAt: '2018-11-13T16:13:29.901Z',
    articleId: 170,
    userId: 11,
    user: {
      id: 11,
      username: 'johngorithm',
      firstname: 'JAY',
      lastname: 'OBI',
      image:
        'http://res.cloudinary.com/dbsxxymfz/image/upload/v1541429992/es8jfxtycdfjvec6ha1a.png',
    },
    likes: [],
    likeCount: 0,
  },
};

const comment = {
  id: 9,
  content: 'Thanks',
  edited: false,
  createdAt: '2018-11-13T16:13:29.901Z',
  updatedAt: '2018-11-13T16:13:29.901Z',
  articleId: 170,
  userId: 11,
  user: {
    id: 11,
    username: 'johngorithm',
    firstname: undefined,
    lastname: undefined,
    image: undefined,
  },
  likes: [],
  likeCount: 0,
};

describe('CommentCard Tests', () => {
  test('it renders successfully', () => {
    const wrapper = shallow(
      <Provider store={store} handleLike={mockFunction}>
        <CommentCard {...props} />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  test('it matches snapshot', () => {
    const wrapper = shallow(
      <Provider store={store} handleLike={mockFunction}>
        <CommentCard {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('it renders username when firstname and lastname are undefined', () => {
    const wrapper = shallow(
      <Provider store={store} handleLike={mockFunction}>
        <CommentCard comment={comment} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
