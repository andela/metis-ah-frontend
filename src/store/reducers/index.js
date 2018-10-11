import { combineReducers } from 'redux';
import mock from './mockReducer';
import categories from './categories';
import featuredArticles from './featuredArticles';
import popularArticles from './popularArticles';
import popularAuthors from './popularAuthors';
import authUser from './authUser';

const rootReducer = combineReducers({
  mock,
  categories,
  featuredArticles,
  popularArticles,
  popularAuthors,
  authUser
});

export default rootReducer;
