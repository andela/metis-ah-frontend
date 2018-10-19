import categories from '../../../src/store/reducers/categories';

const initialState = {
  categories: []
};

const categoriesMock = {
  categories: [{
    id: 1,
    name: 'fashion',
    description: 'fashion house',
    poster: 'banner'
  }]
};

describe('categories reducer test', () => {
  it('should set initial state', () => {
    const state = categories(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('should set initial state', () => {
    const action = {
      type: 'FETCH_CATEGORIES',
      categories: [{
        id: 1,
        name: 'fashion',
        description: 'fashion house',
        poster: 'banner'
      }]
    };
    const state = categories(undefined, action);
    expect(state).toEqual(categoriesMock);
  });
});
