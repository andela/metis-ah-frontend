import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../url.json';
import store from './store';
import App from './App';

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
