import { combineReducers } from 'redux';
import mock from './mockReducer';
import categories from './categories';
import featuredArticles from './featuredArticles';
import popularArticles from './popularArticles';

const rootReducer = combineReducers({
  mock,
  categories,
  featuredArticles,
  popularArticles,
});

export default rootReducer;
