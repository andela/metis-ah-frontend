import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../src/store';

// Component to be tested
import Hero from '../../src/components/compounds/Hero';
import Landing from '../../src/pages/Landing';


Enzyme.configure({ adapter: new Adapter() });

describe('<Hero />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = mount(<Provider store={store}><Hero /></Provider>);
      expect(wrapper.exists()).toBe(true);
    });
  });
  describe('Mount Landing Page', () => {
    test('Mount all landing page component', () => {
      const wrapper = mount(
        <Provider store={store}>
          <StaticRouter context={store}>
            <Landing match={{
              params: {
                id: 1
              }
            }}
            />
          </StaticRouter>
        </Provider>
      );

      expect(wrapper.find('.nav-Categories').exists()).toBe(true);
      expect(wrapper.find('.Featured-ArticlesWrapper').exists()).toBe(true);
    });
  });
});
