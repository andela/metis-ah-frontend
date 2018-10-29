import React from 'react';
import { shallow } from 'enzyme';

import Interest from '../../src/components/atoms/Interest';

describe('Interest', () => {
  it('should render the correct content', () => {
    const wrapper = shallow(<Interest>Food</Interest>);

    expect(wrapper.text()).toEqual('Food');
  });
});
