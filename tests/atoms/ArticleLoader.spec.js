import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import ArticleLoader from '../../src/components/atoms/ArticleLoader';


describe('<ArticleLoader />', () => {
  it('should render a loader', () => {
    const wrapper = shallow(<ArticleLoader />);
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.hasClass('timeline-wrapper')).toEqual(true);
  });
});
