import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from 'Store/actions/createArticle';
import saveArticleMock from '../../__mocks__/getCreateArticleMock';
 const middleware = [thunk];
const mockStore = configureStore(middleware);
const url = '/articles';
const tagUrl = '/tags';

const initialState = {
  createArticle: {
  tags: [],
  error: null,
  loading: false,
  message: null
}
};
 
const history = {
  push: jest.fn()
};

 describe('create Article actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

   it('creates SAVE_ARTICLE_SUCCESS after successfully saving an article', (done) => {
     moxios.stubRequest(url, { status: 200, response: saveArticleMock.data});
      const { data: { data: { message } } } = saveArticleMock;
    const { data: { data: { article} } } = saveArticleMock;
    const expectedActions = [
      { type: 'SAVE_ARTICLE_STARTED' },
      { type: 'SAVE_ARTICLE_SUCCESS', message },
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createArticle(article, history)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });


  it('creates SAVE_TAGS', (done) => {
    moxios.stubRequest(tagUrl, { status: 200, response: saveArticleMock.data
     });
   const { data: { data: { tags } } } = saveArticleMock;
   const expectedActions = [
     { type: 'SAVE_TAGS', tags },
   ];
   const store = mockStore(initialState);
   store.dispatch(actions.getTags()).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
   });
 });
});
