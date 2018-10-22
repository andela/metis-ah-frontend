import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import TopLoader from '../../src/components/atoms/TopLoader';

describe('<TopLoader />', () => {
  it('should render a loader', () => {
    const wrapper = shallow(<TopLoader />);
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.hasClass('topLoader')).toEqual(true);
  });
});
