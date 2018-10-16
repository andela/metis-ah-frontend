import React from 'react';
import { shallow } from 'enzyme';

import Hero from '../../src/components/compounds/Hero';

describe('Hero', () => {
  it('should contain the required texts', () => {
    const wrapper = shallow(<Hero />);

    expect(wrapper.find('h1').text()).toEqual('AUTHOR\'S HAVEN');
    expect(wrapper.find('p').text()).toEqual('A community where readers and writers come together to share and discuss knowledge and ideas.');
  });
});
