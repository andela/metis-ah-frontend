import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import CategorySelect from '../../src/components/atoms/CategorySelect';
const category = [
  {id: 1, name:  "category 1"},
  {id: 2, name:  "category 1"},
  {id: 3, name:  "category 1"},
  {id: 4, name:  "category 1"},
  {id: 5, name:  "category 1"},
  {id: 7, name:  "category 1"},
  {id: 8, name:  "category 1"},
  {id: 9, name:  "category 1"},

]

describe('CategorySelect', () => {
  it('should render categories', () => {
    const wrapper = shallow(<CategorySelect categories={category} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
