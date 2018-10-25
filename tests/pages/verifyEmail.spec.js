import React from 'react';
import { shallow } from 'enzyme';

import VerifyEmail from '../../src/pages/VerifyEmail';

describe('VerifyEmail', () => {
  it('should render all the components', () => {
    const wrapper = shallow(<VerifyEmail />);

    expect(wrapper.exists()).toEqual(true);
  });
});
