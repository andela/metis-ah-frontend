import React from 'react';
import { shallow } from 'enzyme';

import ArticleCardFooter from '../../src/components/compounds/ArticleCardFooter';

describe('ArcicleCardFooter', () => {
  const item = {
    likesCount: '2300',
    firstname: 'mockfirst',
    lastname: 'mocklast',
    image: 'A mock image'
  };
  const wrapper = shallow(<ArticleCardFooter item={item} />);

  it('should have a specific class', () => {
    expect(wrapper.hasClass('ArticleCard__footer')).toEqual(true);
  });

  it('should contain the required elements', () => {
    expect(wrapper.contains('.ArticleCard__FooterThumbnail'));
    expect(wrapper.contains('.ArticleCard__FooterName'));
    expect(wrapper.contains('.ArticleCard__FooterLikes'));
    expect(wrapper.contains('.fa-thumbs-up'));
  });

  it('should render the right content', () => {
    expect(wrapper.find('.ArticleCard__FooterName').text()).toEqual('mockfirst mocklast');
    expect(wrapper.find('.ArticleCard__FooterLikes').text()).toEqual('2.3K');
  });
});
