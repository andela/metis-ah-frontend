import React from 'react';
import { shallow } from 'enzyme';


import { AddComment } from 'Components/compounds/AddComment';


const mockFn = jest.fn();


const props = {
  match: {
    params: {
      token: 'k4tkwertlk554kjlkh4235lkjl6ghjgf56fhf352'
    }
  },
  showModal: mockFn,
  addComment: jest.fn(() => Promise.resolve()),
  isAuth: false,
  isCreateCommentLoading: false
};


describe('ADD COMMENT TESTS', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<AddComment {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    const wrapper = shallow(<AddComment {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call showModal form submits and user is not logged in', () => {
    const wrapper = shallow(<AddComment {...props} />);

    const event = {
      preventDefault: mockFn
    };

    wrapper.setState({
      content: 'Nice work'
    });

    wrapper.find('form').simulate('submit', event);
    expect(wrapper.instance().props.showModal).toHaveBeenCalled();
  });

  test('should call handleSubmit method on form submit', () => {
    const wrapper = shallow(<AddComment {...props} />);

    const event = {
      preventDefault: mockFn
    };

    wrapper.setState({
      content: 'Nice work'
    });

    wrapper.setProps({
      isAuth: true
    });

    wrapper.find('form').simulate('submit', event);
    expect(wrapper.instance().props.addComment).toHaveBeenCalled();
  });

  test('should set comment content on input change', () => {
    const wrapper = shallow(<AddComment {...props} />);

    const event = {
      target: {
        name: 'content',
        value: 'I love your article, keep up the good job'
      }
    };
    const commentTextArea = wrapper.find('[name="content"]');
    commentTextArea.simulate('change', event);

    expect(wrapper.instance().state.content).toEqual('I love your article, keep up the good job');
  });

  test('should should freeze when loading', () => {
    const wrapper = shallow(<AddComment {...props} />);

    wrapper.setProps({ isCreateCommentLoading: true });
    expect(wrapper.instance().props.isCreateCommentLoading).toBe(true);
  });

  test('should match snapshot when content is empty', () => {
    const wrapper = shallow(<AddComment {...props} />);

    const event = {
      preventDefault: mockFn
    };
    wrapper.setState({ content: '' });

    wrapper.find('form').simulate('submit', event);
    expect(wrapper).toMatchSnapshot();
  });
});
