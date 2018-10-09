import { combineReducers } from 'redux';
import mock from './mockReducer';
import categories from './categories';

const rootReducer = combineReducers({
  mock,
  categories,
});

export default rootReducer;
