import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import ArticleEditor from '../../src/components/atoms/ArticleEditor';

const articleOnChangeHandler = jest.fn();

describe('<ArticleEditor />', () => {
  it('should render a loader', () => {
    const wrapper = shallow(<ArticleEditor articleData='data' articleOnChangeHandler={articleOnChangeHandler} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
