import React from 'react';
import { shallow } from 'enzyme';

import Interests from '../../src/components/compounds/Interests';

describe('Interests', () => {
  it('should render the correct content', () => {
    const categories = ['food', 'water', 'ice'];
    const wrapper = shallow(<Interests categories={categories} />);

    expect(wrapper.getElements().length).toEqual(3);
  });
});
