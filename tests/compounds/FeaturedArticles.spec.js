import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import FeaturedArticles from '../../src/components/compounds/FeaturedArticles';
import updateFeaturedArticles from '../../src/store/actions/featuredArticlesAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const url = 'https://metis-ah-staging.herokuapp.com/api/v1/articles/featured'

describe('Featured Articles', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('update featured articles actions success', () => {
    test('should dispatch UPDATE_FEATURED_SUCCESS action', (done) => {
      const featuredArticlesData = {
        data: {
          data: {
            messages: 'Operation successful',
            featuredArticles: [{
              id: 17,
              slug: '10-skills-every-technical-co-founder-should-have-0a03e698-f5e5-47ee-a912-702f0fad4413',
              title: '10 skills every technical co founder should have',
              description: 'In the field of soil environmental monitoring ',
              body: 'In the field of soil environmental monitoring, the real time monitoring of the temperature adnd humidity of the soil ca correctly guide argicultural production and improve crop yield',
              imageUrl: 'http://res.cloudinary.com/dbsxxymfz/image/upload/v1539918646/rpipbs4zipd12gvt1xsc.jpg',
              rating: null,
              createdAt: '2018-10-19T03:10:46.543Z',
              updatedAt: '2018-10-19T03:10:46.543Z',
              userId: 10,
              categoryId: null,
              category: null
            }]
          }
        }
      };

      // Stub and intercept API request
      moxios.stubRequest(url, {
        status: 200,
        response: featuredArticlesData
      });

      // actions expected to be fired
      const expectedActions = [
        { payload: featuredArticlesData.data, type: 'UPDATE_FEATURED_SUCCESS' }
      ];

      const store = mockStore({});

      store
        .dispatch(updateFeaturedArticles())
        .then(() => {
          // expect actions fired to equal expected actions
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
  describe('update featured articles actions failure', () => {
    test('should dispatch UPDATE_FEATURED_FAILURE action', (done) => {
      // Stub and intercept API request
      moxios.stubRequest(url, {
        status: 500,
        response: 'An error occured while processing your request'
      });

      // actions expected to be fired
      const expectedActions = [
        { type: 'UPDATE_FEATURED_FAILURE', payload: 'Unable to fetch data' }
      ];

      const store = mockStore({});
      store
        .dispatch(updateFeaturedArticles())
        .then(() => {
          // expect actions fired to equal expected actions
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
});


describe('FeaturedArticles', () => {
  const initialStore = {
    featuredArticles: [
      {
        id: 1,
        title: 'The Nature of Nature',
        date: 'Aug 30',
        img: 'image1',
      },
      {
        id: 2,
        title: 'The Art of Making Money',
        date: 'Aug 30',
        img: 'image2',
      }
    ]
  };

  it('should render the correct components', () => {
    const store = mockStore(initialStore);

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <FeaturedArticles />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
