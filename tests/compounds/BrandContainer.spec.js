import React from 'react';
import { shallow } from 'enzyme';

import BrandContainer from '../../src/components/compounds/BrandContainer';

describe('BrandContainer', () => {
  it('should contain brand info', () => {
    const wrapper = shallow(<BrandContainer showMenu={() => {}} menu />);

    expect(wrapper.find('.title').text()).toEqual('Author\'s Haven');
  });
});
