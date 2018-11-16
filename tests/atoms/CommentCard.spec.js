import React from 'react';
import { shallow } from 'enzyme';

import CommentCard from 'Atoms/CommentCard';

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
      image: 'http://res.cloudinary.com/dbsxxymfz/image/upload/v1541429992/es8jfxtycdfjvec6ha1a.png'
    }
  }
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
    image: undefined
  }
};


describe('CommentCard Tests', () => {
  test('it renders successfully', () => {
    const wrapper = shallow(<CommentCard {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('it matches snapshot', () => {
    const wrapper = shallow(<CommentCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('it renders username when firstname and lastname are undefined', () => {
    const wrapper = shallow(<CommentCard comment={comment} />);
    expect(wrapper).toMatchSnapshot();
  });
});
