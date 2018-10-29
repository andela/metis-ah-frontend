import React from 'react';
import BasicNav from 'Components/compounds/BasicNav';
import { shallow } from 'enzyme';

const wrapper = shallow(<BasicNav brandName="Author's Haven" logo="http://someimageurl.com/images" />);

describe('BASIC NAV TESTS', () => {
  test('Renders successfully', (done) => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h1').hasClass('brand'));
    done();
  });
});
