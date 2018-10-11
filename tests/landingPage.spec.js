import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component to be tested
import Hero from '../src/components/compounds/Hero';


Enzyme.configure({ adapter: new Adapter() });


describe('<Hero />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = mount(<Hero />);

      expect(wrapper.exists()).toBe(true);
    });
  });
});
