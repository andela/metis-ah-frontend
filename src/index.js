import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../url.json';
import store from './store';
import App from './App';
import setAxiosHeader from './util/helpers/setAxiosHeader';
import { setCurrentUser } from './store/actions/authUser';

axios.defaults.baseURL = BASE_URL;

if (localStorage.user) {
  const user = JSON.parse(localStorage.getItem('user'));
  store.dispatch(setCurrentUser(user));
  setAxiosHeader(user);
}

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
