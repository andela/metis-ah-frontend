import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import LoginButton from '../../src/components/atoms/LoginButton';

describe('LoginButton', () => {
  it('should render the correct text', () => {
    const wrapper = shallow(<LoginButton />);

    expect(wrapper.text()).toEqual('Login');
  });
});
