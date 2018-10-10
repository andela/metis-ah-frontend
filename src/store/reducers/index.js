import { combineReducers } from 'redux';
import mock from './mockReducer';
import categories from './categories';
import featuredArticles from './featuredArticles';
import popularArticles from './popularArticles';
import popularAuthors from './popularAuthors';

const rootReducer = combineReducers({
  mock,
  categories,
  featuredArticles,
  popularArticles,
  popularAuthors,
});

export default rootReducer;
