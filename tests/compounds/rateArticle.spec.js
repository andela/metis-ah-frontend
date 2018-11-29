import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RateArticle from '../../src/components/compounds/RateArticle';

const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn;

describe('Report Article Component', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <RateArticle />
    </Provider>
  );

  it('should render the rate article component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
