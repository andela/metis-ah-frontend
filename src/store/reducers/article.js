import banner from 'Images/hero.jpg';
import {
  FETCH_ARTICLE_START,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAIL,
  SET_HERO_CONTENT
} from 'Constants';

const initialState = {
  category: {
    poster: banner,
    name: 'AUTHOR\'S HAVEN',
    description:
			'A community where readers and writers come together to share and discuss knowledge and ideas.'
  },
  loading: false,
  articles: [],
  error: ''
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_START:
      return {
        ...state,
        loading: true,
        articles: []
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        error: '',
        loading: false
      };
    case FETCH_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        articles: []
      };
    case SET_HERO_CONTENT:
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
};


export default article;
