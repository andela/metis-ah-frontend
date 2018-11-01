import article from '../../../src/store/reducers/createArticle';
 const initialState = {
   tags: [],
   error: null,
   loading: false,
   message: null
};

 const articleMock = {
  article: [{
    id: 1,
    name: 'fashion'
  }],
  message: 'success'
};

 describe('article reducer test', () => {
  it('should set initial state', () => {
    const state = article(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('should set article started', () => {
    const state = article(undefined, { type: 'SAVE_ARTICLE_STARTED' });
    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  });

  it('should set article success', () => {
    const state = article(undefined, { type: 'SAVE_ARTICLE_SUCCESS',
    message: articleMock.message });
    expect(state).toEqual({
      ...initialState,
      loading: false,
      message: 'success'
    });
  });

  it('should set article failed', () => {
    const state = article(undefined, { type: 'SAVE_ARTICLE_FAILED',
    error: articleMock.message });
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: 'success'
    });
  });

  it('should save tags', () => {
    const state = article(undefined, { type: 'SAVE_TAGS',
    tags: ['tags'] });
    expect(state).toEqual({
      ...initialState,
      tags: ['tags']
    });
  });
});
