import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = [thunk];

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware),
));

export default store;
