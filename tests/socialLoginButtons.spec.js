import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SocialLoginButton from '../src/components/atoms/Button/SocialLoginButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SocialLoginButton', () => {
  it('google button should render', () => {
    const wrapper = shallow(<SocialLoginButton
      media="Google"
      backEndLoginURL="some url"
    />);

    expect(wrapper.find('.fa-google').length).toEqual(1);
    expect(wrapper.text()).toEqual('Google');
  });

  it('facebook button should render', () => {
    const wrapper = shallow(<SocialLoginButton
      media="Facebook"
      backEndLoginURL="some url"
    />);

    expect(wrapper.find('.fa-facebook-f').length).toEqual(1);
    expect(wrapper.text()).toEqual('Facebook');
  });

  it('facebook button should render', () => {
    const wrapper = shallow(<SocialLoginButton
      media="Twitter"
      backEndLoginURL="some url"
    />);

    expect(wrapper.find('.fa-twitter').length).toEqual(1);
    expect(wrapper.text()).toEqual('Twitter');
  });

  it('empty button should render', () => {
    const wrapper = shallow(<SocialLoginButton
      media="default"
      backEndLoginURL="some url"
    />);

    expect(wrapper.text()).toEqual('default');
  });
});
