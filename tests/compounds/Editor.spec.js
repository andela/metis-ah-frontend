import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Editor from '../../src/components/compounds/Editor';


const articleBodyHandler = jest.fn();
const articleTitleHandler = jest.fn();
const articleDescriptionHandler = jest.fn();

describe('<Editor />', () => {
  it('should render an editor', () => {
    const wrapper = shallow(<Editor
      articleBody="body"
      articleTitle = "title"
      articleDescription="Description"
      articleBodyHandler={articleBodyHandler}
      articleTitleHandler={articleTitleHandler}
      articleDescriptionHandler={articleDescriptionHandler}
  />);
    expect(wrapper.exists()).toEqual(true);
  });
});
