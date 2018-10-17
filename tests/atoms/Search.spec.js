import React from 'react';
import { shallow } from 'enzyme';

import Search from '../../src/components/atoms/Search';

describe('Search', () => {
  it('should have the right css class', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.hasClass('app-search')).toEqual(true);
  });
});
