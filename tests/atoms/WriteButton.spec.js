import React from 'react';
import { shallow } from 'enzyme';

import WriteButton from '../../src/components/atoms/WriteButton';

describe('WriteButton', () => {
  const wrapper = shallow(<WriteButton />);

  it('should render the right word', () => {
    expect(wrapper.text()).toEqual('WRITE');
  });

  it('should render with the right class', () => {
    expect(wrapper.hasClass('app-general-button')).toEqual(true);
    expect(wrapper.hasClass('button')).toEqual(true);
    expect(wrapper.hasClass('btn')).toEqual(true);
  });
});
