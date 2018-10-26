import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from 'Actions/categories';
import getCategoriesMock from '../../__mocks__/getCatgoriesMock';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const url = '/categories';

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

describe('get categories action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch getCategoriesSuccess action', (done) => {
    moxios.stubRequest(url, { status: 200, response: getCategoriesMock.data });

    const { data: { data: { categories } } } = getCategoriesMock;
    const expectedActions = [
      {
        type: 'FETCH_CATEGORIES',
        categories
      }
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.getCategories())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
