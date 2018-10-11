import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../src/store';

// Component to be tested
import Hero from '../src/components/compounds/Hero';

Enzyme.configure({ adapter: new Adapter() });

describe('<Hero />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = mount(<Provider store={store}><Hero /></Provider>);

      expect(wrapper.exists()).toBe(true);
    });
  });
});
