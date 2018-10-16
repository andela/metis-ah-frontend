import React from 'react';
import { shallow } from 'enzyme';

import CategoriesNav from '../../src/components/compounds/CategoriesNav';

describe('CategoriesNav', () => {
  const wrapper = shallow(<CategoriesNav />);

  it('should render the correct component', () => {
    expect(wrapper.hasClass('nav-Categories')).toEqual(true);
  });

  it('should have the correct child', () => {
    expect(wrapper.find('.Categories-container').exists()).toBe(true);
  });
});
