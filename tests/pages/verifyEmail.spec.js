import React from 'react';
import { mount } from 'enzyme';

import VerifyEmail from '../../src/pages/VerifyEmail';

describe('VerifyEmail', () => {
  it('should render all the components', () => {
    const wrapper = mount(<VerifyEmail />);

    expect(wrapper.find('h1').text()).toEqual('Author\'s Haven');
    expect(wrapper.find('h2').text()).toEqual('Verify your account');
  });
});
