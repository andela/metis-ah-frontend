import React from 'react';
import { mount } from 'enzyme';

import PopularCards from '../../src/components/compounds/PopularCards';

describe('', () => {
  const popularArticles = [
    {
      id: 1,
      title: 'First title',
      description: 'A mock description',
      createdAt: '2018-10-14T00:00:00.000Z',
      likesCount: '2300',
      imageUrl: 'A mock image',
      firstname: 'mockfirst1',
      lastname: 'mocklast1',
      image: 'aImg1',
    },
    {
      id: 2,
      title: 'Second title',
      description: 'Another mock description',
      createdAt: '2018-10-14T00:00:00.000Z',
      likesCount: '2300',
      imageUrl: 'image1',
      firstname: 'mockfirst2',
      lastname: 'mocklast2',
      image: 'aImg1',
    }
  ];

  it('should render all elements', () => {
    const wrapper = mount(<PopularCards popular={popularArticles} />);

    expect(wrapper.exists()).toEqual(true);
  });
});
