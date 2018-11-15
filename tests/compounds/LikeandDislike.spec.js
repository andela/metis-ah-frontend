import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import LikeAndDislike from 'Components/compounds/LikeDislike';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('<Like and Dislike />', () => {
  it('should contain the required texts', () => {
    const store = mockStore({
      singleArticle: {
        article: {
          metadata: {
            author: {
              id: 16,
              username: 'joeeasygy',
              imageUrl: 'http://res.cloudinary.com/dbsxxymfz/image/upload/v1541584107/ikidgkyircxey4j0ycr5.jpg'
            },
            tags: [
              {
                id: 4,
                name: 'Purposefulness'
              }
            ],
            likes: 1,
            dislikes: 0,
            commentCounts: 12,
            category: {
              name: 'CULTURE'
            }
          }
        },
        loading: false,
        error: null
      },
      reaction: {
        reaction: {
          liked: true,
          disliked: false
        }
      },
      likesCount: 0,
      dislikeCount: 0
    });
    const match = { params: { articleId: 1 } };
    const wrapper = mount(<Provider store={store}><BrowserRouter><LikeAndDislike match={match} /></BrowserRouter></Provider>);
    wrapper.find('button.like').simulate('click');
    wrapper.find('button.dislike').simulate('click');
  });
});
