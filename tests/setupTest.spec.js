import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 *  CONFIGURES ENZYME TO BE COMPACTIBLE WITH VERSION 16 OF REACT
 *  WHICH IS WHAT WE ARE USING
 */
Enzyme.configure({ adapter: new Adapter() });

describe('TEST SETUP', () => {
  test('Runs successfully', () => {
    expect(true).toBe(true);
  });
});
