import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import moxios from 'moxios';
import * as actions from "Actions/article";
import constants from "../../../src/store/constants";
import getArticlesMock from "../../__mocks__/getArticlesMock";

const {
  FETCH_ARTICLE_START,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAIL,
  SET_HERO_CONTENT
} = constants;

const middleware = [thunk];
const mockStore = configureStore(middleware);
const url = "/categories/1?page=1";
const url1 = "/categories/1320?page=1";

const initialState = {
  article: {
    heroContent: {
      poster: "banner",
      name: "AUTHOR'S HAVEN",
      description:
        "A community where readers and writers come together to share and discuss knowledge and ideas.",
      buttonIsVisible: false,
      className: "hero"
    },
    loading: false,
    articles: [],
    metadata: {},
    error: ""
  }
};

describe("getArticle action", () => {
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it("creates FETCH_ARTICLE_SUCCESS after successfully fetching articles", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getArticlesMock
      });

      const {
        data: {
          data: { articles }
        }
      } = getArticlesMock;
      const {
        data: {
          data: { category }
        }
      } = getArticlesMock;
      const {
        data: {
          data: { metadata }
        }
      } = getArticlesMock;

      const expectedActions = [
        { type: FETCH_ARTICLE_START },
        {
          type: SET_HERO_CONTENT,
          heroContent: category
        },
        { type: FETCH_ARTICLE_SUCCESS, articles, metadata }
      ];

      const store = mockStore(initialState);

      return store.dispatch(actions.getArticle()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it("creates FETCH_ARTICLE_SUCCESS after successfully fetching articles", () => {
    const { data: { data: { articles } } } = getArticlesMock;
    const { data: { data: { category } } } = getArticlesMock;
    const { data: { data: { noHeroContent } } } = getArticlesMock;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getArticlesMock.data
      });

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

      return store.dispatch(actions.getArticle()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it("creates FETCH_ARTICLE_FAIL after getting error fetching articles", () => {
    const { error: { data: message } } = getArticlesMock;
    const { data: { data: { noHeroContent } } } = getArticlesMock;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: message
      });

      const expectedActions = [
        { type: FETCH_ARTICLE_START },
        { type: SET_HERO_CONTENT, heroContent: noHeroContent },
        { type: FETCH_ARTICLE_FAIL, error: message}
      ];

      const store = mockStore(initialState);

      return store.dispatch(actions.getArticle()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });
});
