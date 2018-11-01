import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import ImageUploadButton from '../../src/components/atoms/ImageUploadButton';

const handler = jest.fn();

describe('<ImageUploadButton />', () => {
  it('should render a button', () => {
    const wrapper = shallow(<ImageUploadButton handler={handler}/>);
    expect(wrapper.exists()).toEqual(true);
  });
});
