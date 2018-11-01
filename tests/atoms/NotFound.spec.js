import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import NotFound from '../../src/pages/NotFound';

describe('<NotFound />', () => {
  it('should render 404 page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find('h1').text()).toEqual('404');
  });
});
