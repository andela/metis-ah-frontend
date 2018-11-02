import React from 'react';
import { shallow } from 'enzyme';
// import timePast from 'time_past';

import ArticleCardBanner from '../../src/components/compounds/ArticleCardBanner';

describe('ArticleCardBanner', () => {
  const item = {
    id: 1,
    title: 'A mock article title',
    description: 'A mock article description',
    createdAt: '2018-10-14T00:00:00.000Z',
    imageUrl: 'A mock image'
  };
  const wrapper = shallow(<ArticleCardBanner item={item} />);

  it('should contain the required elements', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
