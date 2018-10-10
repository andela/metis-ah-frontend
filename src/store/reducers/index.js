import { combineReducers } from 'redux';
import mock from './mockReducer';
import categories from './categories';
import featuredArticles from './featuredArticles';

const rootReducer = combineReducers({
  mock,
  categories,
  featuredArticles,
});

export default rootReducer;
