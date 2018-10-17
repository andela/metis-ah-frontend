import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SocialLogin from '../src/components/compounds/SocialLogin';

Enzyme.configure({ adapter: new Adapter() });

describe('SocialLogin', () => {
  it('should exist', () => {
    const wrapper = shallow(<SocialLogin />);

    expect(wrapper.children().length).toEqual(2);
    expect(wrapper.exists()).toEqual(true);
  });
});
