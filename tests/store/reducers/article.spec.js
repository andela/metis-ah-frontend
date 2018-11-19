import article from '../../../src/store/reducers/article';
import mockData from '../../__mocks__/mockData';

describe('article reducer test', () => {
  it('should set initial state', () => {
    const state = article(undefined, { type: '@@INIT' });
    expect(state).toEqual(mockData);
  });

  it('should set loading to true', () => {
    const action = { type: 'FETCH_ARTICLE_START' };
    const state = article(undefined, action);
    expect(state).toEqual({ ...mockData, loading: true });
  });

  it('should add articles to state', () => {
    const action = {
      type: 'FETCH_ARTICLE_SUCCESS',
      articles: [
        {
          title: 'My article is awesome',
          description: 'Do not test me',
          name: 'Kung Fu',
          time: '4 days ago',
          img: 'banner'
        }
      ]
    };
    const state = article(undefined, action);
    expect(state).toEqual({
      ...mockData,
      articles: action.articles,
      metadata: action.metadata,
      loading: false,
    });
  });

  it('should return an error message while fetching articles', () => {
    const action = {
      type: 'FETCH_ARTICLE_FAIL',
      error: 'will you keep quiet'
    };
    const state = article(undefined, action);
    expect(state).toEqual({
      ...mockData,
      articles: [],
      loading: false,
      error: action.error
    });
  });

  it('should return an error message while fetching articles', () => {
    const action = {
      type: 'SET_HERO_CONTENT',
      heroContent: {
        poster: 'banner',
        name: "AUTHOR'S HAVEN",
        description:
          'A community where readers and writers come together to share and discuss knowledge and ideas.',
        buttonIsVisible: true,
        className: 'hero'
      }
    };
    const state = article(undefined, action);
    expect(state).toEqual({
      ...mockData,
      heroContent: {
        ...action.heroContent
      }
    });
  });
});
