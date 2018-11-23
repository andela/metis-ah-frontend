import {
  combineReducers
} from 'redux';
import mock from './mockReducer';
import categories from './categories';
import featuredArticles from './featuredArticles';
import popularArticles from './popularArticles';
import popularAuthors from './popularAuthors';
import authUser from './authUser';
import article from './article';
import resetPasswordReducer from './resetPasswordReducer';
import createArticle from './createArticle';
import users from './users';
import singleArticle from './singleArticle';
import comments from './comments';
import reaction from './reaction';
import notification from './notification';
import reportArticle from './reportArticle';
import rateArticle from './rateArticle';

const rootReducer = combineReducers({
  mock,
  categories,
  featuredArticles,
  popularArticles,
  popularAuthors,
  authUser,
  article,
  passwordReset: resetPasswordReducer,
  createArticle,
  users,
  singleArticle,
  comments,
  reaction,
  notification,
  reportArticle,
  rateArticle
});

export default rootReducer;
