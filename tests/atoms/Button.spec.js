import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Button from '../../src/components/atoms/Button';


describe('Button', () => {
  it('should render the sent text', () => {
    const wrapper = shallow(<Button color="green" onClick={() => {}}>I render correctly</Button>);

    expect(wrapper.text()).toEqual('I render correctly');
  });
});
