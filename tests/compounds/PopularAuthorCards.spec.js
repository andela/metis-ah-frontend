import React from 'react';
import { shallow } from 'enzyme';

import PopularAuthorsCards from '../../src/components/compounds/PopularAuthorsCards';

const popularAuthors = [
  {
    name: 'john obi',
    likes: '3400',
    image: 'image1',
  },
  {
    name: 'jehonadab okpukoro',
    likes: '3400',
    image: 'image2',
  },
];

describe('PopularAuthorsCards', () => {
  it('should contain the required components', () => {
    const wrapper = shallow(<PopularAuthorsCards popular={popularAuthors} />);

    expect(wrapper.getElements().length).toEqual(2);
  });
});
