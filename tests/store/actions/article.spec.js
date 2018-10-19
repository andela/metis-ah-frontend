import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from 'Actions/article';
import getArticlesMock from '../../__mocks__/getArticlesMock';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const url = '/categories/1';
const url1 = '/categories/1320';

const initialState = {
  article: {
    heroContent: {
      poster: 'banner',
      name: "AUTHOR'S HAVEN",
      description:
        'A community where readers and writers come together to share and discuss knowledge and ideas.',
      buttonIsVisible: false,
      className: 'hero'
    },
    loading: false,
    articles: [],
    error: ''
  }
};

describe('getArticle action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates FETCH_ARTICLE_SUCCESS after successfully fetching articles', (done) => {
    moxios.stubRequest(url, { status: 200, response: getArticlesMock.data });

    const { data: { data: { articles } } } = getArticlesMock;
    const { data: { data: { category } } } = getArticlesMock;
    const expectedActions = [
      { type: 'FETCH_ARTICLE_START' },
      {
        type: 'SET_HERO_CONTENT',
        heroContent: category
      },
      { type: 'FETCH_ARTICLE_SUCCESS', articles },
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getArticle(1, category)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates FETCH_ARTICLE_SUCCESS after successfully fetching articles', (done) => {
    moxios.stubRequest(url, { status: 200, response: getArticlesMock.data });

    const { data: { data: { articles } } } = getArticlesMock;
    const { data: { data: { category } } } = getArticlesMock;
    const { data: { data: { noHeroContent } } } = getArticlesMock;

    const expectedActions = [
      { type: 'FETCH_ARTICLE_START' },
      {
        type: 'SET_HERO_CONTENT',
        heroContent: noHeroContent
      },
      { type: 'FETCH_ARTICLE_SUCCESS', articles },
      {
        type: 'SET_HERO_CONTENT',
        heroContent: category
      },
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getArticle(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates FETCH_ARTICLE_FAIL after getting error fetching articles', (done) => {
    moxios.stubRequest(url1, { status: 404, response: getArticlesMock.error });

    const { error: { data: message } } = getArticlesMock;
    const { data: { data: { noHeroContent } } } = getArticlesMock;

    const expectedActions = [
      { type: 'FETCH_ARTICLE_START' },
      {
        type: 'SET_HERO_CONTENT',
        heroContent: noHeroContent
      },
      {
        type: 'FETCH_ARTICLE_FAIL',
        error: message
      }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getArticle(1320)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
