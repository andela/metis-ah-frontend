import React from 'react';
import { shallow } from 'enzyme';

import FooterBrand from '../../src/components/compounds/FooterBrand';

describe('FooterBrand', () => {
  it('should render the copyright', () => {
    const wrapper = shallow(<FooterBrand />);

    expect(wrapper.hasClass('brandFooter')).toEqual(true);
    expect(wrapper.find('p').text()).toEqual('2018 Copyright of metis team');
  });
});
