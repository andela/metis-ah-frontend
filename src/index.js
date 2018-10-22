import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import setUser from 'Utils/setUser';
import { BASE_URL } from '../config.json';
import store from './store';
import 'babel-polyfill';
import App from './App';


axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
setUser(store);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
