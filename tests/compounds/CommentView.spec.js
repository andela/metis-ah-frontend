
import React from 'react';
import { shallow } from 'enzyme';


import { CommentsView } from '../../src/components/compounds/CommentsView';
import CommentCard from '../../src/components/atoms/CommentCard';

const mockFn = jest.fn();


const props = {
  clearComment: mockFn,
  getComments: mockFn,
  isFetchCommentLoading: false,
  comments: [
    {
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
  ],
  match: {
    params: {
      articleId: 2
    }
  }
};

const propsWithNoComment = {
  clearComment: mockFn,
  getComments: mockFn,
  isFetchCommentLoading: false,
  comments: [],
  match: {
    params: {
      articleId: 2
    }
  }
};
describe('CommentsView Tests', () => {
  const wrapper = shallow(<CommentsView {...props} />);

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.instance().props.clearComment).toHaveBeenCalled();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should should spinner when loading', () => {
    wrapper.setProps({ isFetchCommentLoading: true });
    expect(wrapper.instance().props.isFetchCommentLoading).toBe(true);
  });

  test('should close modal when CLOSE button is clicked', () => {
    wrapper.find('#comments-view-button').simulate('click');
    expect(wrapper.instance().props.getComments).toHaveBeenCalledWith(2);
  });

  test('does not render comments when none is exists', () => {
    const wrapper2 = shallow(<CommentsView {...propsWithNoComment} />);
    expect(wrapper2.find(<CommentCard />).exists()).toBe(false);
  });
});
