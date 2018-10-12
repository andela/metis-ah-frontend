import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../src/store';

// Component to be tested
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });


describe('Landing Page', () => {
  describe('<App />', () => {
    const landingWrapper = mount(<Provider store={store}><App /></Provider>);

    test('renders the titles', () => {
      const brand = landingWrapper.find('h1').first().text();
      const brand1 = landingWrapper.find('h1').last().text();

      expect(brand1).toEqual('AUTHOR\'S HAVEN');
      expect(brand).toEqual('Author\'s Haven');
    });

    test('renders the Buttons', () => {
      const buttonContent = landingWrapper.find('button').last().text();

      expect(buttonContent).toEqual('GET STARTED');
    });

    test('renders categories', () => {
      const categories = landingWrapper.find('.Categories-container').children();

      expect(categories.find('a').length).toEqual(10);
    });
  });
});
