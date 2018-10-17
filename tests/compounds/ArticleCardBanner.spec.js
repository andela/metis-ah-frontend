import React from 'react';
import { shallow } from 'enzyme';

import ArticleCardBanner from '../../src/components/compounds/ArticleCardBanner';

describe('ArticleCardBanner', () => {
  const item = {
    title: 'A mock article title',
    description: 'A mock article description',
    date: 'Aug 20',
    banner: 'A mock image',
  };
  const wrapper = shallow(<ArticleCardBanner item={item} />);

  it('should contain the required elements', () => {
    expect(wrapper.find('.ArticleCard__BannerContent').length).toEqual(1);
    expect(wrapper.find('.ArticleCard__BannerTitle').length).toEqual(1);
    expect(wrapper.find('.ArticleCard__BannerDescription').length).toEqual(1);
    expect(wrapper.find('.ArticleCard__date').length).toEqual(1);
  });

  it('should render the correct content', () => {
    expect(wrapper.find('.ArticleCard__BannerTitle').text()).toEqual('A mock article title');
    expect(wrapper.find('.ArticleCard__BannerDescription').text()).toEqual('A mock article description');
    expect(wrapper.find('.ArticleCard__date').text()).toEqual('Aug 20');
  });

  it('should respond when hovered', () => {
    wrapper.simulate('mouseleave');

    expect(wrapper.get(0).props.style).toHaveProperty('background', 'linear-gradient(to bottom, transparent, transparent, #000000), url(\'A mock image\')');
  });
});
