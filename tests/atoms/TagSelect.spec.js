import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import TagSelect from '../../src/components/atoms/TagSelect';

const handler = jest.fn();
const tags = [
  {name: 'tag 1'},
  {name: 'tag 2'},
  {name: 'tag 3'},
  {name: 'tag 4'}
]
describe('<TagSelect />', () => {
  it('should render a select', () => {
    const wrapper = shallow(<TagSelect
      tags={tags}
      handler={handler}
    />);
    expect(wrapper.exists()).toEqual(true);
  });
});
