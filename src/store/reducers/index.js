import { combineReducers } from 'redux';
import mock from './mockReducer';
import categories from './categories';
import featuredArticles from './featuredArticles';
import popularArticles from './popularArticles';
import popularAuthors from './popularAuthors';
import authUser from './authUser';
import article from './article';
import resetPasswordReducer from './resetPasswordReducer';
import createArticle from './createArticle';

const rootReducer = combineReducers({
  mock,
  categories,
  featuredArticles,
  popularArticles,
  popularAuthors,
  authUser,
  article,
  passwordReset: resetPasswordReducer,
  createArticle
});

export default rootReducer;
