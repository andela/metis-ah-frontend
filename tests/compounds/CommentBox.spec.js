import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'Components/compounds/CommentBox'


describe('CommentBox Tests', () => {
  test('it renders successfully', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.exists()).toBe(true);
  });

  test('it matches snapshot', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
