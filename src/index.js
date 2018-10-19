import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import setAxiosHeader from './util/helpers/setAxiosHeader';
import { setCurrentUser } from './store/actions/authUser';

axios.defaults.baseURL = 'https://metis-ah-staging.herokuapp.com/api/v1';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

if (localStorage.user) {
  const user = JSON.parse(localStorage.getItem('user'));
  store.dispatch(setCurrentUser(user));
  setAxiosHeader(user);
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
