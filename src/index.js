import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BASE_URL } from '../url.json';
import store from './store';
import App from './App';
import setAxiosHeader from './util/helpers/setAxiosHeader';
import { resetCurrentUser } from './store/actions/authUser';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

if (localStorage.user) {
  const user = JSON.parse(localStorage.getItem('user'));
  setAxiosHeader(user.token);

  if (user) {
    store.dispatch(resetCurrentUser(user));
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
