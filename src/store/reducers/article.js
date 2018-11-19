import banner from 'Images/hero.jpg';
import constants from 'Constants';

const {
  FETCH_ARTICLE_START,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAIL,
  SET_HERO_CONTENT
} = constants;

const initialState = {
  heroContent: {
    poster: banner,
    name: 'AUTHOR\'S HAVEN',
    description:
      'A community where readers and writers come together to share and discuss knowledge and ideas.',
    buttonIsVisible: true,
    className: 'hero'
  },
  loading: false,
  articles: [],
  metadata: {},
  error: ''
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        metadata: action.metadata,
        loading: false
      };
    case FETCH_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        articles: [],
        metadata: {}
      };
    case SET_HERO_CONTENT:
      return {
        ...state,
        heroContent: {
          ...state.heroContent,
          ...action.heroContent
        },
      };
    default:
      return state;
  }
};


export default article;
