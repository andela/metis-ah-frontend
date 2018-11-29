import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from '';

import Notification from '../../src/components/compounds/Notification';

describe('Notification Component', () => {
  const wrapper = shallow(<Notification />);

  it('should render the notification component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
